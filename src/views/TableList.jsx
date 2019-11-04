
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
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
                  <h5 className="card-category">PageSpeed Score</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <PageSpeedInsightsScore url='https://n.vodafone.ie/en.html' />
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
