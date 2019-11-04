import Dashboard from "views/Dashboard.jsx";
import SoastaApp from "views/SoastaApp.jsx";
import Appdynamics from "views/Appdynamics.jsx";
import TableList from "views/TableList.jsx";

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
    component: SoastaApp,
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
