import SectionHeader from "../../../../Components/utils/sectionHeader";

function Services() {
  return (
    <div className="p-4">
      <SectionHeader
        subHead={
          "Our roasts feature multiple underlying notes, from floral and bright to bold and smooth"
        }
        head={"The highest quality from seed to cup"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-28 pb-28">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            It’s that moment when your hand is warmed by the mug
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4">
            Our roasts feature multiple underlying notes. We believe the
            unexpected can happen when good design and great coffee come
            together. We also believe there is an outside in all of us to be
            found.
          </p>
          <img
            src="https://i.pinimg.com/564x/77/19/ec/7719ecac01ca59281d529d1b9ae2c85f.jpg"
            alt="Coffee Moment"
            className="object-cover w-1/2 md:w-full h-[40vh] md:h-[60vh] shadow-md"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://i.pinimg.com/736x/14/41/e3/1441e3d8f5a4f576430d868db1e3c367.jpg"
            alt="Coffee Art"
            className="object-cover w-1/2 md:h-[60vh] md:w-full  shadow-md mb-4"
          />

          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            We are proud to offer this exquisite coffee and proud to support
            producer partners around the world doing sustainability work that
            benefits their farms, their communities, and the planet.
          </p>
        </div>
        <div className="flex items-center md:justify-center">
          <div className="w-1/2 md:w-full h-[30vh] md:h-72 relative">
            <h1>Learn more</h1>
            <img
              src="https://i.pinimg.com/564x/70/24/98/702498e0289cd18be9c160eb81357b30.jpg"
              alt="Learn More"
              className="w-full h-full object-cover  shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
