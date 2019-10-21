/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import PageSpeedInsightsStats from '../components/PageSpeed'
import PageSpeedInsightsScore from '../components/score'
class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">PageSpeed Color</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <PageSpeedInsightsScore url='https://github.com' />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Stats</h5>
                </CardHeader>
                <CardBody>
                  
                  <PageSpeedInsightsStats url='https://n.vodafone.ie/en.html' />
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
