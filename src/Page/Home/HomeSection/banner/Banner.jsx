import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import coffee8 from "../../../../assets/images/Banner/4.jpg";
import coffee82 from "../../../../assets/images/Banner/3.jfif";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[coffee8, coffee82].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0 z-[999] pointer-events-none bg-[#11111152]"></div>
              <motion.img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 15,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className="textCon absolute z-[999] pointer-events-none 
          sm:top-20 md:top-32 lg:top-40 xl:top-44 text-center flex items-center
           justify-center flex-col text-white font-black px-4 md:px-0
            text-xl sm:text-4xl md:text-5xl lg:text-6xl gap-2 md:gap-6 xl:text-7xl leading-tight"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Your guide to the world of drinking great coffee.
          </motion.h1>
          <motion.h1 className="text-sm font-normal md:text-2xl">
            The suppliers and producers we work with are at the top of their
            game. It’s our role to carry the magic from their hands to your
            table.
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-lime-400 pointer-events-auto text-black font-semibold py-2 px-4 hover:bg-lime-600 transition-all text-sm sm:text-base"
            >
              Discover More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-transparent border pointer-events-auto border-white text-white font-semibold py-2 px-4 hover:bg-white hover:text-black transition-all text-sm sm:text-base"
            >
              Book Table
            </motion.button>
          </div>
        </div>
      </Swiper>
    </>
  );
}
