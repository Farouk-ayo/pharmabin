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
  },
  {
    quote:
      "PharmaBin has opened my eyes to the rules and regulations that go along with all aspects of a healthcare facility. It makes compliance so easy",
    author: "Dr. Adetola James",
    designation: "Medical Director, MedLife Clinic",
  },
  {
    quote:
      "This was disposal body has opened my eyes to the rules and regulations that go along with all aspects of a healthcare facility. It makes compliance so easy.",
    author: "Dr. Johnson Bankole",
    designation: "MD Lando Recycling Industrial Limited",
  },
];

export default function Carousel() {
  return (
    <div className="relative w-full h-full px-4 lg:px-28 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/community-slider.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/70 bg-[#157D18]/50 md:bg-transparent" />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative z-10 mx-auto py-16 flex flex-col items-center justify-center h-full text-center text-white max-w-5xl px-4">
              <p className="text-2xl md:text-4xl text-white font-medium italic mb-4">
                “{card.quote}”
              </p>
              <p className="text-lg font-medium text-secondary">
                {card.author}
                <br />
                <span className="text-secondary/70">{card.designation}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
