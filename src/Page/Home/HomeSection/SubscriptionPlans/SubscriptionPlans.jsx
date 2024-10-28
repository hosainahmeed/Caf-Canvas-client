import { useEffect, useState } from "react";
import SectionHeader from "../../../../Components/utils/sectionHeader";
import { AnimatePresence, motion } from "framer-motion";

function SubscriptionPlans() {
  const [plans, setPlans] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  useEffect(() => {
    fetch("subscriptionPlans.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const handleMouseLeave = () => {
    setHoveredId(null);
  };
  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  return (
    <div className="py-28 flex items-center justify-center px-4 flex-col">
      <SectionHeader subHead={"Choose Your Plan"} head={"Subscription"} />

      <div className="w-full grid md:grid-cols-2 gap-4 mt-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="w-full flex items-center justify-center"
          >
            <div
              onMouseEnter={() => handleMouseEnter(plan.id)}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(plan.id)}
              className="card w-full relative md:h-[50vh] overflow-hidden overflow-y-scroll rounded-none text-black shadow-xl hover:shadow-2xl transition-all bg-transparent"
            >
              {hoveredId === plan.id && (
                <AnimatePresence>
                  <motion.div
                    initial={{ height: "0px", opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    className="p-2 bg-lime-200 absolute top-1/2 left-0 w-full h-0 transform -translate-y-1/2 z-[-1]"
                  ></motion.div>
                </AnimatePresence>
              )}

              <div className="card-body p-6 text-start">
                <h2 className="text-2xl font-bold text-gray-800">
                  {plan.planName}
                </h2>
                <p className="text-gray-600 text-xl md:text-2xl mt-2 mb-4">
                  {plan.description}
                </p>

                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm font-semibold">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="text-2xl font-bold text-gray-800 mt-6">
                  <span className="text-lg font-semibold">$</span>
                  {plan.price}{" "}
                  <span className="text-base font-normal text-gray-500">
                    / {plan.frequency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionPlans;
