
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
    name: "Web",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/appdynamics",
    name: "AppDynamics Portal",
    component: Appdynamics,
    layout: "/admin"
  },
  {
    path: "/soastaapp",
    name: "App",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/performance",
    name: "Performance",
    component: TableList,
    layout: "/admin"
  }
];
export default routes;
