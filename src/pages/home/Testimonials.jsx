import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Rating from "../../components/rating";
import { reviews } from "../../utils/reviews";

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h3 className="text-primary text-lg font-semibold mb-4 uppercase">
          Testimonials
        </h3>
        <h1 className="capitalize text-5xl font-bold mb-4">
          Our Client Reviews
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper swiper-button-next:after">
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${review.coverImg})` }}>
            <div className="md:h-[540px] flex justify-center items-end p-4">
              <div className="bg-white rounded-2xl md:w-4/5 w-full p-6 relative shadow-lg">
                {/* Profile Image */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-12 text-center space-y-3">
                  <h3 className="font-bold text-lg text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed px-2">
                    {review.review}
                  </p>

                  <div className="flex justify-center gap-1 pt-2">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
