import { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/more/logo1.png";
import useAuth from "../../Components/Hook/useAuth";

export default function CombinedNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { user } = useAuth();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Reservation", path: "/reservation" },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Order", path: "/order" },
    { label: "History", path: "/history" },
    { label: "Profile", path: "/profile" },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="navbar-container">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center bg-white px-2">
        <Button
          className="menu-toggle-btn sm:hidden"
          onClick={toggleDrawer}
          icon={isDrawerOpen ? <IoMdClose /> : <CiMenuBurger />}
        />

        {/* Navbar Brand */}
        <div className="navbar-brand flex items-center gap-2 pr-3 px-12 py-4">
          <img src={logo} alt="Caff Canvas Logo" className="w-12" />
          <h1 className="font-ranch text-xl">Caff Canvas</h1>
        </div>

        {/* Main Menu for Larger Screens */}
        <Menu mode="horizontal" className="hidden sm:flex">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        {/* Right Side Login and Signup */}
        <div className="flex gap-4 items-center justify-end">
          {user ? (
            <Link to="/login" className="hidden lg:block">
              Login
            </Link>
          ) : (
            <Button type="primary" href="/signup">
              Sign Up
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        visible={isDrawerOpen}
        className="sm:hidden"
      >
        <Menu mode="vertical">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
}
