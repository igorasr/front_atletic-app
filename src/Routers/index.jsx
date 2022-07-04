import { useRoutes } from "react-router-dom";

import ProductsPage from "../views/ProductsPage";
import TemplateDefault from "../views/Templates/TemplateDefault";
import FeedPage from './../views/FeedPage/index';
import LoginPage from './../views/LoginPage/index';

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "app",
      element: <TemplateDefault/>,
      children: [
        {index: true, element: <FeedPage/> },
        {path: 'shopping', element: <ProductsPage/> }
      ]
    }
  ]);
};

export default Routers;
