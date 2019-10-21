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
                      <h5 className="card-category">Web Summary</h5>
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
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261076&public=true&filterUID=238e863e-497c-42b3-9286-d21f73b0cee8"
                    />
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
                  <h5 className="card-category">Top 10 Page Groups</h5>

                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2259628&public=true&filterUID=68a34786-6f25-41cc-bd88-7c780f619684"
                    />
                    {/* <ResponsiveEmbed src="http://vglm12vr.dc-dublin.de:8090/controller/dashboards.jsp?desktopView=false&webpack=prod#/location=DASHBOARD_VIEWER&token=47149ed4-34a8-429d-8015-e1e74c105d2f&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60"/> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Page Groups</h5>

                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">

                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261108&public=true&filterUID=2940ba48-a085-475d-919f-14768d9d4934"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Top 10 Device Groups</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261115&public=true&filterUID=a06c1766-04ef-49ba-9011-0b4ec632191c"
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
                      <h5 className="card-category">Measurements Over Time </h5>
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
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261312&public=true&filterUID=852805ec-ee2e-439b-9fa0-3c32326ccd17"
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
                  <h5 className="card-category">Page Load</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261120&public=true&filterUID=b835b9f4-4720-4db5-a900-99454a3ee3de"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">All Asset Transfer Size Over Time</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-big">
                    <iframe
                      className="iframe-widget"
                      width="100%"
                      height="100%"
                      src="https://mpulse.soasta.com/concerto/DashboardServlet?dashboardID=2261309&public=true&filterUID=3868784a-4853-45f1-9893-51335555f634"
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

export default Dashboard;
