import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffe from "../Components/UpdateCoffe";
import Home from "../Page/Home/Home";
import SignUp from "../Page/Signup/SignUp";
import Login from "../Page/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffe></UpdateCoffe>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login ></Login >,
      },
    ],
  },
]);

export default router;
