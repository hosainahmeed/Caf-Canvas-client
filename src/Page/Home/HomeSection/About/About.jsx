import { motion } from "framer-motion";
import about from "../../../../assets/images/About/about.jfif";
import SectionHeader from "../../../../Components/utils/sectionHeader";
import backImg from '../../../../assets/images/more/1.png'
function About() {

  return (
    <div style={{backgroundImage:`url(${backImg})`}} className="bg-cover bg-center bg-no-repeat py-12 md:py-28">
      <SectionHeader subHead={"Explore us"} head={"About us"}></SectionHeader>
      <div className="max-w-screen-2xl mt-12 mx-auto bg-cover bg-center px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 w-full md:w-1/2 lg:w-2/3 p-4 sm:p-6 shadow-lg border border-gray-200 bg-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="text-xs font-sans sm:text-sm md:text-base font-semibold text-white py-2 px-4 bg-lime-500 rounded-md shadow-md uppercase tracking-wider"
          >
            Fore more <small className="text-[10px]">click</small>
          </button>
     
          <h1 className="text-lg font-ranch sm:text-xl md:text-2xl lg:text-6xl font-bold leading-snug text-gray-800">
            We Combine Classics and Modernity
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-gray-600">
            We appreciate your trust greatly. Our clients choose us and our
            products because they know we are the best.
          </p>
          <p className="text-xs font-sans sm:text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Mon-Fri: 9 AM – 10 PM <br />
            Saturday: 9 AM – 8 PM
          </p>
        </motion.div>

        <motion.img
          src={about}
          alt="About us"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full sm:w-10/12 md:w-1/2 lg:w-1/3 bg-lime-200 p-4 sm:p-6"
        />
      </div>
    </div>
  );
}

export default About;
