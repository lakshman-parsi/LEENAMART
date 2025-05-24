import React from "react";
import ReactDOM from "react-dom/client";
import Prod_details from "./components/Prod_details.jsx";
import Prodv_details from "./components/Prodv_details.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/user.jsx";
import Signup from "./pages/Signup.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import Adminpanel from "./pages/adminpanel";
import Allusers from "./pages/Allusers.jsx";
import Productupload from "./pages/productupload.jsx";
import Products from "./pages/products.jsx";
import Categorywise from "./pages/categorywise.jsx";
import Addtocart from "./pages/Addtocart.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Addtocart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "/user",
        element: <User />,
      },

      {
        path: "/details/:product",
        element: <Prod_details />,
      },
      {
        path: "/productdetails/:product",
        element: <Prodv_details />,
      },

      {
        path: "/Category/:categoryname",
        element: <Categorywise />,
      },
      {
        path: "/admin",
        element: <Adminpanel />,
        children: [
          {
            path: "allusers",
            element: <Allusers />,
          },
          {
            path: "productup",
            element: <Productupload />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
