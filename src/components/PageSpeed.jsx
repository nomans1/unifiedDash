import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { object, string, boolean, number } from "yup";
import Widget from "./Widget";

import { Table } from "reactstrap";

const schema = object().shape({
  url: string()
    .url()
    .required(),
  filterThirdPartyResources: boolean(),
  interval: number(),
  strategy: string(),
  title: string()
});

export default class PageSpeedInsightsStats extends Component {
  static defaultProps = {
    filterThirdPartyResources: false,
    interval: 1000 * 60 * 60 * 12,
    strategy: "desktop",
    title: "PageSpeed Stats"
  };

  state = {
    stats: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    schema
      .validate(this.props)
      .then(() => this.fetchInformation())
      .catch(err => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors);
        this.setState({ error: true, loading: false });
      });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  bytesToKilobytes(bytes) {
    return bytes > 0 ? (bytes / 1024).toFixed(1) : 0;
  }

  async fetchInformation() {
    const { url, filterThirdPartyResources, strategy } = this.props;

    const searchParams = [
      `url=${url}`,
      `filter_third_party_resources=${filterThirdPartyResources}`,
      `strategy=${strategy}`
    ].join("&");

    try {
      const res = await fetch(
        `https://www.googleapis.com/pagespeedonline/v2/runPagespeed?${searchParams}`
      );
      const json = await res.json();

      const pageStats = json.pageStats;
      const stats = {
        cssCount: pageStats.numberCssResources || 0,
        cssSize: this.bytesToKilobytes(pageStats.cssResponseBytes),
        htmlSize: this.bytesToKilobytes(pageStats.htmlResponseBytes),
        imageSize: this.bytesToKilobytes(pageStats.imageResponseBytes),
        javascriptCount: pageStats.numberJsResources || 0,
        javascriptSize: this.bytesToKilobytes(
          pageStats.javascriptResponseBytes
        ),
        requestCount: pageStats.numberResources || 0,
        requestSize: this.bytesToKilobytes(pageStats.totalRequestBytes),
        otherSize: this.bytesToKilobytes(pageStats.otherResponseBytes)
      };

      this.setState({ error: false, loading: false, stats });
    } catch (error) {
      this.setState({ error: true, loading: false });
    } finally {
      this.timeout = setTimeout(
        () => this.fetchInformation(),
        this.props.interval
      );
    }
  }

  render() {
    const { error, loading, stats } = this.state;
    const { title } = this.props;
    return (
      <Widget title={title} loading={loading} error={error}>
        <Table className="tablesorter" responsive>
          <tbody>
            <tr>
              <th>Request</th>
              <td>
                {stats.requestSize} KB ({stats.requestCount})
              </td>
            </tr>

            <tr>
              <th>JavaScript</th>
              <td>
                {stats.javascriptSize} KB ({stats.javascriptCount})
              </td>
            </tr>

            <tr>
              <th>CSS</th>
              <td>
                {stats.cssSize} KB ({stats.cssCount})
              </td>
            </tr>

            <tr>
              <th>HTML</th>
              <td>{stats.htmlSize} KB</td>
            </tr>

            <tr>
              <th>Image</th>
              <td>{stats.imageSize} KB</td>
            </tr>

            <tr>
              <th>Other</th>
              <td>{stats.otherSize} KB</td>
            </tr>
          </tbody>
        </Table>
      </Widget>
    );
  }
}
