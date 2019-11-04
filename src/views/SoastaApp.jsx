import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from "reactstrap";


class SoastaApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">App Summary</h5>
                      {/* <CardTitle tag="h2">Web</CardTitle> */}
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261401&public=true&filterUID=2ce0b10f-8af3-40ac-b758-4c307a7d01f6"
                    />
                    {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                  </div>

                  {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Page Groups & Carriers</h5>
                  {/* <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle> */}
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    {/* <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    /> */}
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261404&public=true&filterUID=b3f9a736-a93a-410a-9d8a-81fc834c2dde"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">App Operating Systems</h5>
                  {/* <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle> */}
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    {/* <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    /> */}
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261405&public=true&filterUID=4a613ea2-e6e2-4801-96ff-07cbed7b1508"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">domContentLoaded over Time </h5>
                      {/* <CardTitle tag="h2">Web</CardTitle> */}
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261403&public=true&filterUID=1d1af20a-5743-4eb1-8b98-4c93dc8accc1"
                    />
                    {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                  </div>

                  {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">All Page Groups</h5>
                  {/* <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle> */}
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    {/* <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    /> */}
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261406&public=true&filterUID=b8b5ba77-9ac6-41dc-b2d2-7bf5d05d0ffd"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Top 5 User Agents</h5>

                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">

                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261504&public=true&filterUID=5f97cf9c-7114-48d7-a7fa-04c4f0fc3f2d"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SoastaApp;
