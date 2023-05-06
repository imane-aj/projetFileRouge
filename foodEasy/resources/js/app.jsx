import "./bootstrap";
import { createRoot } from "react-dom/client";
import "../css/app.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./User";
import Auth from "./Auth";
import Register from "./Auth/Components/Register";
import Login from "./Auth/Components/Login";
import Dashboard from './Admin/Components/Content/Dashboard/index';
import Category from './Admin/Components/Content/Category/index';
import Product from './Admin/Components/Content/Product/index';
import Order from "./Admin/Components/Content/Order";
import Customer from "./Admin/Components/Content/Customers";
import Transaction from "./Admin/Components/Content/Transaction";
import ProtectedRoute from './Auth/Components/ProtectedRoute';
import Admin from './Admin/index';
import ProductList from "./User/Components/Content/MenuProducts/ProductList";

const router = createBrowserRouter([
    {
      path: "/*",element: <User />,
      children: [
        {index:true, element:<ProductList />},
        {path: "category/:id", element:<ProductList />}
      ],
    },
    {
      path: "/admin/*",element: <ProtectedRoute element={Admin} roles={['admin']} /> ,
      children: [
        {index:true,element:<Dashboard />},
        {path: "categories",element: <Category />},
        {path: "products",element: <Product />},
        {path: "orders",element: <Order />},
        {path: "customers",element: <Customer />},
        {path: "transactions",element: <Transaction />}
      ],
    }, 
    {
      path: "/auth/*",element: <Auth />,
      children: [
        {index:true,element:<Register />},
        {path: "register",element: <Register />},
        {path: "login",element: <Login />},
      ],
    },
  ]);
if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
