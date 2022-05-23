import { useRoutes } from "react-router-dom";
import App from "../views/";
import ProductsPage from "../views/ProductsPage";
import TemplateAdmin from "../views/Templates/TemplateAdmin";
import FeedPage from './../views/FeedPage/index';
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
      element: <TemplateAdmin/>,
      children: [
        {path: 'feed', element: <FeedPage/> },
        {path: 'shopping', element: <ProductsPage/> }
      ]
    }
  ]);
};

export default Routers;
