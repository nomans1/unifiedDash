
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Appdynamics from "views/Appdynamics.jsx"
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/soasta",
    name: "SOASTA",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/appdynamics",
    name: "AppDynamics",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Appdynamics,
    layout: "/admin"
  },
  {
    path: "/dynatrace",
    name: "Dynatrace",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  }
];
export default routes;
