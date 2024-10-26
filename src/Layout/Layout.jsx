import { Outlet } from "react-router-dom";
import Header from "../Page/Shared/Header";
import Footer from "../Page/Shared/Footer";

function Layout() {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Header />
      </div>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
