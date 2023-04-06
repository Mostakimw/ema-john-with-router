import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Shop from "./components/Shop/Shop";
import Order from "./components/Orders/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import loadCartsProducts from "./cartProductsLoad";
import Checkout from "./components/Checkout/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Order></Order>,
        loader: loadCartsProducts,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
