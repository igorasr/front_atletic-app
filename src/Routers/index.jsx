import { useRoutes } from "react-router-dom";
import App from "../views";

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
    },
  ]);
};

export default Routers;
