import { Outlet, useLocation } from "react-router-dom";
import Header from "../Page/Shared/Header";
import Footer from "../Page/Shared/Footer";
import { useState } from "react";

function Layout() {
  const [cart, setCart] = useState(0);
  const location = useLocation();
  const visual =
    location.pathname.toLowerCase() === "/login" || location.pathname.toLowerCase() === "/signup";
  if (visual) {
    return <Outlet></Outlet>;
  }
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Header cart={cart} setCart={setCart} />
      </div>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
