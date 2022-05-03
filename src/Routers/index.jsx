import { useRoutes } from "react-router-dom";
import App from "../views/";
import TemplateAdmin from "../views/Templates/TemplateAdmin";
import LoginPage from './../views/LoginPage/index';

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "admin",
      element: <TemplateAdmin/>
    }
  ]);
};

export default Routers;
