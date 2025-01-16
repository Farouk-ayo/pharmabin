"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

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
    <div className="relative w-full md:w-1/2">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative z-10 text-center text-primary p-8 flex flex-col justify-center h-full">
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
    </div>
  );
};

export default TestimonialSection;
