import { Outlet } from "react-router-dom";
import Header from "../Page/Shared/Header";
import Footer from "../Page/Shared/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
