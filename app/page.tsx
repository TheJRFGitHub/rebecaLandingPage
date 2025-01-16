"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    text: "whatevr",
    image: "/images/philosophy.jpg",
  },
  {
    id: 2,
    text: "whatever 1",
    image: "/images/wellness.jpg",
  },
  {
    id: 3,
    text: "whatever 2",
    image: "/images/community.jpg",
  },
];

export default function Home() {
  return (
    <div className="text-center">
      <div className="relative mx-auto max-w-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="swiper-container"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                {/* Image with no borders or shadows */}
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-auto object-cover border-none shadow-none"
                />
                {/* Overlay text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">
                    {slide.text}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
