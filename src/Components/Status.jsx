import { useState, useEffect, useRef } from "react";
import imageStat from "../assets/images/Banner/0.jpg";
import SectionHeader from "./utils/sectionHeader";

function Status() {
  const statusData = [
    { id: 1, number: 250, title: "Varieties of Coffee" },
    { id: 2, number: 123, title: "Hours of Testing" },
    { id: 3, number: 321, title: "Coffee Markets" },
    { id: 4, number: 220, title: "Coffee Brands" },
  ];

  const [counts, setCounts] = useState(statusData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      statusData.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 10));

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });
        }, 10);
      });
    }
  }, [hasAnimated]);

  return (
    <div className="my-28" ref={sectionRef}>
      <SectionHeader
        subHead={"there is some info"}
        head={"Overview"}
      ></SectionHeader>
      <div
        style={{ backgroundImage: `url(${imageStat})` }}
        className="bg-fixed relative py-56 bg-cover bg-no-repeat mt-12"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 grid grid-cols-1 gap-2 md:grid-cols-4 left-0 w-full h-4/12 backdrop-blur-2xl text-lime-400 py-12">
          {statusData.map((stat, index) => (
            <div
              className="flex items-center text-center justify-center flex-col"
              key={stat.id}
            >
              <h1 className="text-3xl md:text-6xl font-black font-ranch">
                {counts[index]} +
              </h1>
              <h1 className="md:text-3xl">{stat.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
