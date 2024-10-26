import Status from "../../Components/Status";
import About from "./HomeSection/About/About";
import Banner from "./HomeSection/banner/Banner";
import Offer from "./HomeSection/Offer/Offer";
import PhotoGallary from "./HomeSection/PhotoGallary/PhotoGallary";
import Services from "./HomeSection/Services/Services";
import Spacial from "./HomeSection/Spacial/Spacial";
import SubscriptionPlans from "./HomeSection/SubscriptionPlans/SubscriptionPlans";
import Testimonial from "./HomeSection/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <Banner></Banner>
      <Offer></Offer>
      <About></About>
      <Services></Services>
      <Spacial></Spacial>
      <Status></Status>
      <PhotoGallary></PhotoGallary>
      <Testimonial></Testimonial>
      <SubscriptionPlans></SubscriptionPlans>
    </>
  );
}

export default Home;
