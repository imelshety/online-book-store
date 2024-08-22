import { useTheme } from "@mui/material";
import sliderImg3 from "/assets/slider-top-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode

  return (
    <section className={`${isDarkMode?'bg-white':'bg-[#FCEBEA]'} rounded-lg px-8 w-4/5 mx-auto mt-12 py-8 flex justify-center items-center relative`}>
      <Swiper
        className=" relative my-12 py-12"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: ".swiper-button-next-3",
          prevEl: ".swiper-button-prev-3",
        }}
        pagination={{
          el: ".swiper-pagination-custom-1", // Target the custom pagination container
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide className="flex flex-col justify-center items-start gap-8">
          <h3
            className={`${
              isDarkMode ? "text-[#393280]" : "text-[#393280]"
            } text-sm lg:text-[45px] leading-8 lg:leading-[66px] font-semibold`}
          >
            All books are 50% off now! Don't miss such a deal!
          </h3>
          <span className="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </span>
          <div className="flex justify-center items-center gap-12">
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-start gap-8">
          <h3
            className={`${
               isDarkMode ? "text-[#393280]" : "text-[#393280]"
            } text-sm lg:text-[45px] leading-8 lg:leading-[66px] font-semibold`}
          >
            All books are 50% off now! Don't miss such a deal!
          </h3>
          <span className="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </span>
          <div className="flex justify-center items-center gap-12">
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-start gap-8">
          <h3
            className={`${
              isDarkMode ? "text-[#393280]" : "text-[#393280]"
            } text-sm lg:text-[45px] leading-8 lg:leading-[66px] font-semibold`}
          >
            All books are 50% off now! Don't miss such a deal!
          </h3>
          <span className="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </span>
          <div className="flex justify-center items-center gap-12">
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
            <span className="flex flex-col justify-center gap-4 uppercase text-[#ED553B] font-bold text-sm lg:text-xl">
              768
              <span
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                days
              </span>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      <img src={sliderImg3} alt="slide-img" className="ml-8 hidden lg:block" />

      {/* Custom Pagination Container */}
      <div className="swiper-pagination-custom-1 absolute bottom-4 left-0 right-0 flex justify-center"></div>
    </section>
  );
};

export default Banner;
