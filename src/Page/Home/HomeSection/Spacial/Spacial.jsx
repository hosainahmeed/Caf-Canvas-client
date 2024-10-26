import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../../../Components/utils/sectionHeader";

function Spacial() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("coffee.json")
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);

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

  const addToCart = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full font-ranch flex items-center justify-between flex-col py-10">
      <SectionHeader subHead={"Our Menu"} head={"Our Specials"}></SectionHeader>
      <div className="w-[90vw] md:w-[100vw] mt-10 md:p-12 max-w-7xl">
        <div className="space-y-4  grid gap-8 md:grid-cols-2">
          {coffeeData.map((data) => (
            <motion.div
              key={data.id}
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(data.id)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTap={()=>handleMouseEnter(data.id)}
              className="flex w-full justify-between items-center px-3 border-b-2 py-4 cursor-pointer relative bg-transparent"
            >
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">{data.name}</h1>
              <AnimatePresence>
                {hoveredId === data.id && (
                  <motion.button
                    initial={{ fontSize: "0px", opacity: 0 }}
                    animate={{ fontSize: "20px", opacity: 1 }}
                    exit={{ fontSize: "0px", opacity: 0, height: "1px" }}
                    transition={{ duration: 0.3 }}
                    className="btn btn-xs md:btn-sm font-sans"
                    onClick={() => addToCart(data.id)}
                  >
                    Add to Cart
                  </motion.button>
                )}
              </AnimatePresence>
              <p className="text-xl md:text-3xl  lg:text-4xl font-bold">${data.price.toFixed(2)}</p>
              <AnimatePresence>
                {hoveredId === data.id && (
                  <motion.div
                    initial={{ opacity: 0, height: "1px" }}
                    animate={{ opacity: 1, height: "100%" }}
                    exit={{ opacity: 0, height: "1px" }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-lime-400 w-full h-full -z-10 "
                  ></motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {hoveredId === data.id && (
                  <>
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
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <button className="btn bg-lime-400 font-sans text-2xl btn-2xl mt-12">See more</button>
    </div>
  );
}

export default Spacial;
