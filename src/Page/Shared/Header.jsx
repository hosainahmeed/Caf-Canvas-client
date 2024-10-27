import { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import logo from "../../assets/images/more/logo1.png";
import useAuth from "../../Components/Hook/useAuth";
import { Popover, PopoverTrigger, PopoverContent, User } from "@nextui-org/react";

export default function CombinedNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Reservation", path: "/reservation" },
    { label: "Blog", path: "/blog" },
    { label: "Order", path: "/order" },
    { label: "History", path: "/history" },
    { label: "Profile", path: "/profile" },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

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
            <div className="flex items-center gap-2">
              <Popover showArrow placement="bottom">
                <PopoverTrigger>
                  <User
                    as="button"
                    name={user.displayName || "User"}
                    className="transition-transform w-12 h-12 object-cover"
                    avatarProps={{
                      src: user.image || "",
                      alt: "User Avatar",
                      
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.description}</p>
                </PopoverContent>
              </Popover>

              <button onClick={handleLogOut} className="hidden lg:block">
                <IoIosLogOut style={{ fontSize: "24px" }} />
              </button>
            </div>
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
