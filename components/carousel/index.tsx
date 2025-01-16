"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    quote:
      "PharmaBin has opened my eyes to the rules and regulations that go along with all aspects of a healthcare facility. It makes compliance so easy.",
    author: "Pharm. Oluwabusayo Cyril",
    designation: "CEO Well-Land Pharmacy & Stores",
    backgroundImage: "./community-slider1.png",
  },
  {
    quote:
      "With PharmaBin’s innovative solutions, managing pharmaceutical waste has become effortless and secure for our facility.",
    author: "Dr. Adetola James",
    designation: "Medical Director, MedLife Clinic",
    backgroundImage: "./community-slider2.png",
  },
  {
    quote:
      "Thanks to PharmaBin, we have achieved compliance with all regulations while ensuring the safety of our patients.",
    author: "Pharm. Olayemi Oladele",
    designation: "Owner, CarePlus Pharmacy",
    backgroundImage: "./community-slider3.png",
  },
];

export default function Carousel() {
  return (
    <div className="relative  px-4 lg:px-28  flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(./community-slider.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />{" "}
      <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/70 bg-[#157D18]/60 md:bg-transparent " />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full relative"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative z-10 text-center text-white max-w-5xl mx-auto py-16">
              <p className="text-2xl md:text-4xl font-medium italic mb-4">
                “{card.quote}”
              </p>
              <p className="text-lg font-medium text-secondary">
                {card.author}
                <br />
                <span className="text-secondary/70">{card.designation}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
}
