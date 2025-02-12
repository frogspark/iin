import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function MobileVerticalSlider({ items }) {
  return (
    <div className="mobile-slider">
      <Swiper
        // Include Navigation and Grid modules
        modules={[Navigation, Grid]}
        // Enable navigation (you can customize the buttons via CSS or Swiper options)
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Use grid mode: 2 rows per group (each group is a vertical stack of 2 slides)
        grid={{
          rows: 2,
          fill: "row",
        }}
        // Show one “group” (i.e. one column) at a time
        slidesPerView={1}
        // Add some spacing between slides if desired
        spaceBetween={10}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-lg mt-2">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons placed at the bottom */}
      <div className="flex justify-center mt-4">
        <button className="swiper-button-prev bg-gray-300 p-2 mx-1">
          Prev
        </button>
        <button className="swiper-button-next bg-gray-300 p-2 mx-1">
          Next
        </button>
      </div>
    </div>
  );
}
