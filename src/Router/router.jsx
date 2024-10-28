import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffe from "../Components/UpdateCoffe";
import Home from "../Page/Home/Home";
import SignUp from "../Page/Signup/SignUp";
import Login from "../Page/Login/Login";
import Menu from "../Page/Menu/Menu";
import Reservation from "../Page/Reservation/Reservation";
import AboutSection from "../Page/AboutPage/AboutSection";
import Blog from "../Page/Blog/Blog";
import Order from "../Page/Order/Order";
import Contact from "../Page/Contact/Contact";

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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>,
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
