import { Image } from "antd";
import image from "../../../../assets/images/Gallery/h2-img-3.jpg";
import image2 from "../../../../assets/images/Gallery/h2-img-5.jpg";
import image3 from "../../../../assets/images/Gallery/h2-img-6.jpg";
import image4 from "../../../../assets/images/Gallery/h2-img-8.jpg";
import image5 from "../../../../assets/images/Gallery/Cappuccino.jfif";
import SectionHeader from "../../../../Components/utils/sectionHeader";

function PhotoGallery() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-12 md:mt-28 space-y-4 md:space-y-0 md:space-x-4">
        <SectionHeader
        subHead={''}
        head={'Our Sweet Gallery'}
        ></SectionHeader>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="w-full md:w-auto">
          <Image className="w-full h-auto" src={image} />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 md:w-[400px]">
          <Image className="w-full h-auto" src={image2} />
          <Image className="w-full h-auto" src={image3} />
          <Image className="w-full h-auto" src={image4} />
          <Image className="w-full h-auto" src={image5} />
        </div>
      </Image.PreviewGroup>
    </div>
  );
}

export default PhotoGallery;
