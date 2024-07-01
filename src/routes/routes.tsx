import Layout from "@layouts/Layout";
import ProductsPage from "@pages/ProductsPage";
import ShoppingCartPage from "@pages/ShoppingCartPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <ProductsPage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/cart', element: <ShoppingCartPage /> },

    ]
  }
]);

export default router;
