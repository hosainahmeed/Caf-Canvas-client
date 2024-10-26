import SectionHeader from "../../../../Components/utils/sectionHeader";
import icon1 from "../../../../assets/images/Offer/icon1.png";
import icon2 from "../../../../assets/images/Offer/icon2.png";
import icon3 from "../../../../assets/images/Offer/icon3.png";
import icon4 from "../../../../assets/images/Offer/icon4.png";
import backImg from '../../../../assets/images/more/10.png'
function Offer() {
  const offerShowcase = [
    {
      id: 1,
      title: "Coffee To Go",
      description:
        "Freshly brewed coffee in a convenient, grab-and-go style for those on the move. Perfect for busy mornings or an afternoon pick-me-up.",
      image: icon2,
    },
    {
      id: 2,
      title: "Coffee & Pastry",
      description:
        "Indulge in the classic pairing of a steaming cup of coffee with a delicious, freshly baked pastry. A treat for any time of the day!",
      image: icon1,
    },
    {
      id: 3,
      title: "Bean Varieties",
      description:
        "Explore our selection of premium coffee beans from around the world. Each bean variety is carefully selected to deliver unique flavors and aromas.",
      image: icon4,
    },
    {
      id: 4,
      title: "Types of Coffee",
      description:
        "From espressos to lattes, explore a variety of coffee types that cater to every taste and preference. Savor the richness of each carefully crafted cup.",
      image: icon3,
    },
  ];

  return (
    <div className="mt-12 md:mt-28 px-2">
      <SectionHeader head={"Our Delicious Offer"}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12">
        {offerShowcase.map((offer) => (
          <div style={{backgroundImage:`url(${backImg})`}} key={offer.id} className="text-center flex items-center justify-center flex-col border-2 p-12">
            <img src={offer.image} alt={`${offer.title} image`} />
            <h1 className="text-3xl font-ranch font-bold">{offer.title}</h1>
            <p className="text-base">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
