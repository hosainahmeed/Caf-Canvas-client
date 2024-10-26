import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import coffee from "../../../../assets/images/1.png";
import coffee2 from "../../../../assets/images/2.png";
import coffee3 from "../../../../assets/images/3.png";
import coffee4 from "../../../../assets/images/4.png";
import coffee8 from "../../../../assets/images/Banner/4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {[coffee8, coffee, coffee2, coffee3, coffee4].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full top-0 left-0 z-[999] pointer-events-none bg-[#11111152]"></div>
              <motion.img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.5] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
