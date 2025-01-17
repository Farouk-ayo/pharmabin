"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "../icons";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "Quality of the service is good, it has met our needs in that everything has a place and gets disposed of safely for personnel and for the environment.",
      author: "Pharm. Mubarak Usman",
      designation: "Chief Superintendent Cyril Pharmacy & Stores",
    },
    {
      quote:
        "Their disposal system is remarkable and environmentally conscious.",
      author: "Dr. Sarah Johnson",
      designation: "Senior Pharmacist",
    },
    {
      quote: "Outstanding service that has transformed our waste management.",
      author: "Pharm. David Chen",
      designation: "Operations Director",
    },
  ];

  return (
    <div className="relative w-full mx-auto md:w-1/2 ">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass:
            "inline-block h-2 w-2 mx-1 rounded-full bg-gray-400 cursor-pointer transition-all duration-300",
          bulletActiveClass: "!bg-black",
        }}
        className="h-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative z-10 text-center text-primary  flex flex-col gap-2 lg:gap-20 h-full py-20 md:py-10">
              <p className="text-xl md:text-2xl italic mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-medium text-black text-left">
                {testimonial.author}
                <br />
                <span className="text-black/70">{testimonial.designation}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination absolute bottom-0  left-1/2 -translate-y-1/2 z-20" />

      <button className="custom-prev absolute left-0 bottom-0 z-20 p-2 hover:opacity-75 transition-opacity">
        <ArrowLeft />
      </button>
      <button className="custom-next absolute right-0 bottom-0 z-20 p-2 hover:opacity-75 transition-opacity">
        <ArrowRight />
      </button>
    </div>
  );
};

export default TestimonialSection;
