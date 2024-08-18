import { FC } from "react";
import Header from "../../components/Header/Header";
import HeaderIcons from "../../components/Header/Subcomponents/HeaderIcons";
import HeaderLogo from "../../components/Header/Subcomponents/HeaderLogo";
import HeaderNav from "../../components/Header/Subcomponents/HeaderNav";
import HeaderTop from "../../components/Header/Subcomponents/HeaderTop";
import sliderImg1 from "/assets/slider-top-1.png";
import sliderImg2 from "/assets/slider-top-2.png";
import sliderImg3 from "/assets/slider-top-3.png";
import img1 from "/assets/img1.png";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomButton from "../../components/CustomButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Home: FC = () => {
  return (
    <main className="container">
      <Header>
        <HeaderTop />
        <HeaderLogo />
        <HeaderNav />
        <HeaderIcons />
      </Header>
      <section className="w-full h-full bg-gradient-to-r from-[#fdebea] to-white mt-[7rem] lg:mt-[10rem] py-8">
        <Swiper
          className="w-full h-full relative"
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide className="w-full h-full flex flex-col gap-2 lg:gap-0 lg:flex-row justify-around items-center">
            <div className="ps-5 w-2/3 lg:w-1/3 h-full flex flex-col justify-between items-center lg:items-start gap-4">
              <h1 className="text-6xl font-semibold text-[#393280]">
                ipsum dolor Si
              </h1>
              <p className="text-xl font-medium text-[#393280] leading-[39.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton>Read More</CustomButton>
            </div>
            <div>
              <img src={sliderImg1} alt="slider-top-1" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-full flex flex-col gap-2 lg:gap-0 lg:flex-row justify-around items-center">
            <div className="ps-5 w-2/3 lg:w-1/3 h-full flex flex-col justify-between items-center lg:items-start gap-4">
              <h1 className="text-6xl font-semibold text-[#393280]">
                ipsum dolor Si
              </h1>
              <p className="text-xl font-medium text-[#393280] leading-[39.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton>Read More</CustomButton>
            </div>
            <div>
              <img src={sliderImg2} alt="slider-top-2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full flex flex-col gap-2 lg:gap-0 lg:flex-row justify-around items-center">
            <div className="ps-5 w-2/3 lg:w-1/3 h-full flex flex-col justify-between items-center lg:items-start gap-4">
              <h1 className="text-6xl font-semibold text-[#393280]">
                ipsum dolor Si
              </h1>
              <p className="text-xl font-medium text-[#393280] leading-[39.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton>Read More</CustomButton>
            </div>
            <div>
              <img src={sliderImg3} alt="slider-top-2" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Swiper navigation buttons */}
        <div className="swiper-button-next-1 group absolute top-2/3 right-2 transform -translate-y-1/2 z-10 cursor-pointer w-[48.71px] h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowRightLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>

        <div className="swiper-button-prev-1 group absolute top-2/3 left-2 transform -translate-y-1/2 z-10 cursor-pointer w-[48.71px] h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowLeftLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>
      </section>
      <section className="w-full lg:w-4/5 mx-auto mt-[7rem] relative">
        <span className="text-[#ED553B] font-semibold text-[14px] relative after:content-[''] after:block after:w-[32.15px] after:h-[2px] after:bg-[#ED553B] after:absolute after:top-1/2 after:-left-3/4 lg:ms-16 mb-2">
          Categories
        </span>
        <h2 className="text-[32px] font-semibold text-[#393280]">
          Explore our Top Categories
        </h2>
        <Swiper
          className="w-full h-full relative mt-12"
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next-2",
            prevEl: ".swiper-button-prev-2",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img1}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold">Higher Education</h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img2}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold">Management Books</h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img3}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold"> Engineering Books</h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img2}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold"> Engineering Books</h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img1}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold"> Engineering Books</h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img3}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-[#393280] text-[24px] font-semibold"> Engineering Books</h3>
          </SwiperSlide>
        
        </Swiper>
          {/* Swiper navigation buttons */}
          <div className="swiper-button-next-2 group absolute top-12 right-0  transform -translate-y-1/2 z-50 cursor-pointer w-[48.71px] h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowRightLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>

        <div className="swiper-button-prev-2 group absolute top-12 right-16 transform -translate-y-1/2 z-50 cursor-pointer w-[48.71px] h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowLeftLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>
      </section>
    </main>
  );
};

export default Home;
