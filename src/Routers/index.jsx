import { useRoutes } from "react-router-dom";
import App from "../views/";
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
  ]);
};

export default Routers;
