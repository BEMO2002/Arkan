import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation from imports
import "swiper/css";
import "swiper/css/pagination"; // Removed navigation CSS import
import star from "../assets/home/Star 2.png";
import { useTranslation } from "react-i18next";
import logo from "../assets/home/logo(arkan).png";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.people.michael.name"),
      position: t("testimonials.people.michael.position"),
      text: t("testimonials.quotes.michael"),
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      name: t("testimonials.people.sarah.name"),
      position: t("testimonials.people.sarah.position"),
      text: t("testimonials.quotes.sarah"),
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 3,
      name: t("testimonials.people.emily.name"),
      position: t("testimonials.people.emily.position"),
      text: t("testimonials.quotes.emily"),
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 4,
      name: t("testimonials.people.david.name"),
      position: t("testimonials.people.david.position"),
      text: t("testimonials.quotes.david"),
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="flex items-center justify-center space-x-2 mb-10 mt-10">
        <img src={star} alt={t("common.starAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("testimonials.header")}
        </h3>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          width: 12px;
          height: 12px;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #f09219;
          transform: scale(1.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <img
            src={logo}
            alt={t("common.logoAlt")}
            className="w-[121.72px] mx-auto"
          />
        </div>

        <div className="testimonials-swiper relative">
          <Swiper
            modules={[Pagination, Autoplay]} // Removed Navigation module
            spaceBetween={30}
            slidesPerView={1}
            // Removed navigation prop
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  style={{
                    boxShadow: "0px 0px 5.519px 0px rgba(240, 146, 25, 0.50)",
                  }}
                  className="bg-white ml-2 mb-7 mt-4 backdrop-blur rounded-2xl p-8 border border-white/20 shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-baseTwo p-2 text-[16px] bg-foot rounded-[16.558px] mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-4 border-white/30"
                    />
                    <div>
                      <h4 className="text-[18px] font-semibold text-base mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-baseTwo">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-8 flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
