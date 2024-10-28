import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../../../Components/utils/sectionHeader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Components/Hook/useAxiosPublic";
import { Skeleton } from "antd";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../Components/Hook/useAuth";

function Spacial() {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    data: specialCoffe = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["special"],
    queryFn: async () => {
      const result = await axiosPublic.get("/special");
      return result.data;
    },
  });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleTouchMove = (e) => {
    setMousePosition({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const addToCart = (data) => {
    if (!user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You need to log in to add items to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }


    const { description, image, name, price, taste } = data;
    const cartData = {
      name,
      taste,
      price,
      image,
      description,
      userEmail: user?.email,
      userId: user?.uid,
    };

    axiosPublic
      .post("/carts", cartData)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: `${name} has been added to the cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Could not add item to cart. Please try again later.",
        });
      });
  };

  return (
    <div className="w-full font-ranch flex items-center justify-between flex-col py-10">
      <SectionHeader subHead={"Our Menu"} head={"Our Specials"}></SectionHeader>
      <div className="w-[90vw] md:w-[100vw] mt-10 md:p-12 max-w-7xl">
        <div className="space-y-4 grid gap-8 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} active avatar paragraph={{ rows: 2 }} />
              ))
            : specialCoffe.map((data) => (
                <motion.div
                  key={data._id}
                  onMouseEnter={() => handleMouseEnter(data._id)}
                  onMouseLeave={handleMouseLeave}
                  onTouchEnd={handleMouseLeave}
                  onTouchStart={() => handleMouseEnter(data._id)}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onTap={() => handleMouseEnter(data._id)}
                  className="flex w-full justify-between items-center px-3 border-b-2 py-4 cursor-pointer relative bg-transparent"
                >
                  <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                    {data.name}
                  </h1>
                  <AnimatePresence>
                    {hoveredId === data._id && (
                      <motion.button
                        initial={{ fontSize: "0px", opacity: 0 }}
                        animate={{ fontSize: "20px", opacity: 1 }}
                        exit={{ fontSize: "0px", opacity: 0, height: "1px" }}
                        transition={{ duration: 0.3 }}
                        className="btn btn-xs md:btn-sm font-sans"
                        onClick={() => addToCart(data)}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                  <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                    ${data.price.toFixed(2)}
                  </p>
                  <AnimatePresence>
                    {hoveredId === data._id && (
                      <motion.div
                        initial={{ opacity: 0, height: "1px" }}
                        animate={{ opacity: 1, height: "100%" }}
                        exit={{ opacity: 0, height: "1px" }}
                        transition={{ duration: 0.2 }}
                        className="absolute bg-lime-400 w-full h-full -z-10"
                      ></motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {hoveredId === data._id && (
                      <motion.img
                        src={data.image}
                        alt={data.name}
                        className="fixed top-0 left-0 transform -translate-x-1/2 rotate-12 -translate-y-1/2 z-50 pointer-events-none w-72 h-96 shadow-lg opacity-50"
                        style={{
                          top: mousePosition.y + 10,
                          left: mousePosition.x + 10,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: "50%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
        </div>
      </div>
      <button className="btn bg-lime-400 font-sans text-2xl btn-2xl mt-12">
        <Link to={"/menu"}>See more</Link>
      </button>
    </div>
  );
}

export default Spacial;
