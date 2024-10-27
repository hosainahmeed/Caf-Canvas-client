import SectionHeader from "../../../../Components/utils/sectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "./reviewStyle.css";
import ReactStars from "react-rating-stars-component";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Components/Hook/useAxiosPublic";

function Testimonial() {
  const axiosPublic = useAxiosPublic();

  const { data: reviewsData = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const result = await axiosPublic.get("/reviews");
      return result.data;
    },
  });
  if (isLoading) {
    return (
      <div className="mt-12 md:mt-28">
        <SectionHeader subHead="What's our client says" head="Testimonials" />
        <div className="flex w-full justify-between items-center">
          <div className="skeleton h-32 w-96"></div>
          <div className="skeleton h-32 w-96"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-12 md:mt-28">
      <SectionHeader subHead="What's our client says" head="Testimonials" />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex items-start justify-around space-x-5 px-12 py-12">
                <div className="review-card min-h-48 text-start">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="ring-primary w-12 rounded-full border-2 border-[#07332F]">
                          <img
                            src={review.profileImage}
                            alt={review.name}
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="leading-4 text-nowrap">{review.name}</h3>
                        <p className="leading-4">{review.designation}</p>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-5xl md:block hidden" />
                  </div>
                  <p>{review.review_text}</p>
                  <div className="flex flex-col items-start">
                    <h1 className="font-normal text-base md:text-xl md:font-semibold font-sans">
                      {review.feedback}
                    </h1>
                    <div className="flex items-center">
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                      <span className="ml-2">{review.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
