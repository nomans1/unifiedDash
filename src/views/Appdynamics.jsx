
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";



class Dashboard extends React.Component {
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
                      <h5 className="card-category">Campaign Journeys</h5>
                      {/* <CardTitle tag="h2">Web</CardTitle> */}
                    </Col>
                    
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area chart-area-big">
                    <iframe className="iframe-widget" width='100%' height='100%' src="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=f49a2a88-9913-483a-bc5d-42d32bdc82c0&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"  />
                    {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                  </div>

                  {/* <Iframe url="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Portal Nodes Health</h5>
  
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                   
                  <iframe className="iframe-widget" width='100%' height='100%' src="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"  />
                    {/* <ResponsiveEmbed src="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
 
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>

                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                  
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">

                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  {/* <PageSpeedInsightsScore url='https://n.vodafone.ie/en.html' /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
