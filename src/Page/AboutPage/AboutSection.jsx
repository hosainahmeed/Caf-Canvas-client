import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import leader from '../../assets/images/Gallery/download (4).jfif'
import SectionHeader from "../../Components/utils/sectionHeader";
function AboutSection() {
  const [members, setMembers] = useState([]);
  const [visID, setVisID] = useState(null);

  useEffect(() => {
    fetch("staff.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  // Define animation variants for grid items
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleVisible = (id) => {
    setVisID(id);
  };
  const handleHidden = () => {
    setVisID(null);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4">
      <div className="w-full md:h-[40vw] overflow-hidden relative">
        <img src={leader} alt="leader" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 bg-[#11111169] z-[888] w-full h-full pointer-events-none"></div>
      </div>
      <SectionHeader
      head={'team'}
      ></SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member) => (
          <motion.div
            key={member.id}
            onMouseEnter={() => handleVisible(member.id)}
            onMouseLeave={() => handleHidden()}
            onTouchStart={() => handleVisible(member.id)}
            onTouchEnd={() => handleHidden()}
            className="relative overflow-hidden w-full h-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img src={member.image} className="w-full h-64 sm:h-80 object-cover" />
            {visID === member.id && (
              <motion.div
                initial={{ bottom: "-100%", opacity: 0 }}
                animate={{ bottom: "0%", opacity: 1 }}
                exit={{ bottom: "-100%", opacity: 0 }}
                className="absolute text-white bottom-0 pt-4 pl-4 left-0 w-full h-1/2 bg-black bg-opacity-75 z-[999]"
              >
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Name: {member.name}</h1>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Position: {member.position}
                </h1>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Experience: {member.experience}
                </h1>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <SectionHeader
      
      ></SectionHeader>
    </div>
  );
}

export default AboutSection;
