import { useEffect, useState } from "react";



function AboutSection() {
  const [members, setMembers] = useState([]);

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

  return (
    <div></div>
  );
}   

export default AboutSection;
