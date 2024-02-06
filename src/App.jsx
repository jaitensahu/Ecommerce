import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login-and-Signup/Login";
import Signup from "./Components/Login-and-Signup/Signup";
import firebase from './Firebase/Firebase'

import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import ProductDetailPage from "./Components/ProductDetailPage/ProductDetailPage";
import ShoppingCart from "./Components/ShoppingCart/ShopingCart";


function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
        path: "/",
        element: <Dashboard />,
        },
        {
          path: "/Login",
          element:<Login />
        },
        {
          path: "/Signup",
          element:<Signup />
        },
        {
          path: "/product-details/:id",
          element:<ProductDetailPage />
        },
        {
          path:"/cart",
          element:<ShoppingCart />
        }
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
