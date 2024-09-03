
import { FC, useEffect } from "react";
import sliderImg1 from "/assets/slider-top-1.png";
import sliderImg2 from "/assets/slider-top-2.png";
import sliderImg3 from "/assets/slider-top-3.png";
import img1 from "/assets/img1.png";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import imgBook1 from "/assets/books/book1.png";
import imgBook2 from "/assets/books/book2.png";
import imgBook from "/assets/books/book.png";

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
import CustomButton from "../../Shared/components/CustomButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Grid, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../../Shared/components/Banner";
import Subscibe from "../../Shared/components/Subscibe";
import Articles from "../../Shared/components/Articles";
import Header from "../../Shared/components/Header/Header";
import { fetchBooks } from "../../rtk/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Book, RootState } from "../../types";
import { AppDispatch } from "../../rtk/store";
import { FaLongArrowAltRight } from "react-icons/fa";
import { getRandomImage } from "../../Shared/constant/ListImages";
import Loading from "../../Shared/components/Loading";

const Home: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.items);
  const bookStatus = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);
  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  if (bookStatus === 'loading') {
    return <Loading/>;
  }

  if (bookStatus === 'failed') {
    return <div>{error}</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode
  return (
    <>
     <Header>
        <Header.HeaderTop />
        <Header.Logo />
        <Header.Nav />
        <Header.Icons />
      </Header>
    <main className="container">
      <section
        className={`w-full h-full mt-[7rem] lg:mt-[10rem] py-8 ${
          isDarkMode
            ? "" // No gradient for dark mode, use solid color
            : "bg-gradient-to-r from-[#fdebea] to-white" // Gradient for light mode
        }`}
        style={{
          backgroundColor: isDarkMode
            ? theme.palette.background.default // Solid color for dark mode
            : "transparent",
        }}
      >
        <Swiper
          className="w-full h-full relative"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
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
              <h1
                className={`text-6xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                ipsum dolor Si
              </h1>
              <p
                className={`text-xl font-medium ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } leading-[39.6px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton><Link to="/home/books">read more</Link></CustomButton>
            </div>
            <div>
              <img src={sliderImg1} alt="slider-top-1" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-full flex flex-col gap-2 lg:gap-0 lg:flex-row justify-around items-center">
            <div className="ps-5 w-2/3 lg:w-1/3 h-full flex flex-col justify-between items-center lg:items-start gap-4">
              <h1
                className={`text-6xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                ipsum dolor Si
              </h1>
              <p
                className={`text-xl font-medium ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } leading-[39.6px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton><Link to="/home/books">read more</Link></CustomButton>
            </div>
            <div>
              <img src={sliderImg2} alt="slider-top-2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full flex flex-col gap-2 lg:gap-0 lg:flex-row justify-around items-center">
            <div className="ps-5 w-2/3 lg:w-1/3 h-full flex flex-col justify-between items-center lg:items-start gap-4">
              <h1
                className={`text-6xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                ipsum dolor Si
              </h1>
              <p
                className={`text-xl font-medium ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } leading-[39.6px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <CustomButton><Link to="/home/books">read more</Link></CustomButton>
            </div>
            <div>
              <img src={sliderImg3} alt="slider-top-2" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Swiper navigation buttons */}
        <div className="swiper-button-next-1 group absolute top-2/3 right-2 transform -translate-y-1/2 z-10 cursor-pointer w-8 h-8 lg:w-[48.71px] lg:h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowRightLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>

        <div className="swiper-button-prev-1 group absolute top-2/3 left-2 transform -translate-y-1/2 z-10 cursor-pointer w-8 h-8 lg:w-[48.71px] lg:h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowLeftLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>
      </section>
      <section className="w-full lg:w-4/5 mx-auto mt-[7rem] relative">
        <span className="ms-16  text-[#ED553B] font-semibold text-[14px] relative after:content-[''] after:block after:w-[32.15px] after:h-[2px] after:bg-[#ED553B] after:absolute after:top-1/2 after:-left-3/4 mb-2">
          Categories
        </span>
        <h2
          className={`text-base lg:text-[32px] mt-4 font-semibold ${
            isDarkMode ? "text-white" : "text-[#393280]"
          }`}
        >
          Explore our Top Categories
        </h2>
        <Swiper
          className="w-full h-full relative my-12"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
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
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide per view on screens from 0px width and up
            },
            640: {
              slidesPerView: 1, // 2 slides per view on screens from 640px width and up
            },
            768: {
              slidesPerView: 2, // 3 slides per view on screens from 768px width and up
            },
            1024: {
              slidesPerView: 3, // 4 slides per view on screens from 1024px width and up
            },
          }}
        >
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img1}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              Higher Education
            </h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img2}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              Management Books
            </h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img3}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              {" "}
              Engineering Books
            </h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img2}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              {" "}
              Engineering Books
            </h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img1}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              {" "}
              Engineering Books
            </h3>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center gap-8">
            <img
              src={img3}
              alt="img1"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#393280]"
              } text-sm lg:text-[24px] font-semibold`}
            >
              {" "}
              Engineering Books
            </h3>
          </SwiperSlide>
        </Swiper>
        {/* Swiper navigation buttons */}
        <div className="swiper-button-next-2 group absolute top-12 right-0  transform -translate-y-1/2 z-20 cursor-pointer w-8 h-8 lg:w-[48.71px] lg:h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowRightLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>

        <div className="swiper-button-prev-2 group absolute top-12 right-16 transform -translate-y-1/2 z-20 cursor-pointer w-8 h-8 lg:w-[48.71px] lg:h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
          <FaArrowLeftLong className="text-lg text-[#ED553B] group-hover:text-white" />
        </div>
        <div className="w-full my-[5rem] flex justify-center">
          <CustomButton>
            <Link to="/home/books">view more</Link>
          </CustomButton>
        </div>
      </section>
      <section
        className={`w-full h-full mt-[7rem] py-12 flex flex-col justify-center items-center gap-5 ${
          !isDarkMode ? "bg-[#FCECEC]" : "" // bg for light mode
        }`}
      >
        <span
          className={`${
            isDarkMode ? "text-white" : "text-[#7A7A7A]"
          } font-[500] text-[13px] uppercase`}
        >
          Some quality items
        </span>
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-[#393280]"
          }  text-xl lg:text-5xl mt-3 relative px-4 
  lg:before:content-[''] lg:before:w-full lg:before:h-[2px] 
  lg:before:absolute lg:before:top-1/2 lg:before:right-full 
  ${isDarkMode ? "before:bg-white" : "before:bg-[#E0E0E0]"} 
  lg:after:content-[''] lg:after:w-full lg:after:h-[2px] 
  after:absolute lg:after:top-1/2 lg:after:left-full 
  ${isDarkMode ? "after:bg-white" : "after:bg-[#E0E0E0]"}`}
        >
          New Release Books
        </h2>
        <Swiper
          className="w-full h-full relative my-12 py-12 border-b-2 border-[#E0E0E0]"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next-3",
            prevEl: ".swiper-button-prev-3",
          }}
          pagination={{
            el: ".swiper-pagination-custom", // Target the custom pagination container
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide per view on screens from 0px width and up
            },
            640: {
              slidesPerView: 2, // 2 slides per view on screens from 640px width and up
            },
            768: {
              slidesPerView: 3, // 3 slides per view on screens from 768px width and up
            },
            1024: {
              slidesPerView: 4, // 4 slides per view on screens from 1024px width and up
            },
          }}
        >
         
          {books.map((book: Book) => (
             <SwiperSlide className="flex flex-col justify-center items-center gap-8">
          <Grid key={book._id} item xs={12} sm={6} md={4} display='flex' flexDirection="column" justifyContent='center' alignItems='center' gap={2}>
            <Stack className={`bg-white rounded p-4 group relative transition-all ease-out duration-500 ${!isDarkMode ? 'border-2': '' }`}>
              <Link to={`/home/books/${book._id}`} className="hidden group-hover:flex group-hover:duration-300 rounded bg-[#ED553B] uppercase py-5 px-2 lg:px-12 text-white absolute top-1/2 left-16 lg:left-8 z-20 transition-transform duration-300 ease-in-out hover:scale-105 justify-center items-center text-nowrap gap-3">
                View Details <FaLongArrowAltRight />
              </Link>
              <img
                src={getRandomImage()}
                alt="Book Cover"
                className="max-w-full transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Stack>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-[#393280]'} leading-8 text-sm lg:text-[24px] font-semibold`}>
              {book.name}
            </h3>
            <span className="text-sm font-normal">{book.auther}</span>
            <span className={`text-sm lg:text-[18px] ${isDarkMode ? 'text-white' : 'text-[#ED553B]'} font-bold`}>
              $ {book.price}
            </span>
          </Grid>
          </SwiperSlide>

        ))}
           
       
        </Swiper>
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center lg:gap-20">
          <div className="flex justify-center items-center gap-4 lg:ms-20 swiper-pagination-custom"></div>

          <Link
            to="/home/books"
            className="flex justify-center items-center gap-2 text-[16px] leading-[19.36px] text-nowrap text-[#ED553B] hover:underline tran"
          >
            View all products <FaArrowRightLong />{" "}
          </Link>
        </div>
      </section>
      <section
        className={`w-full h-full mt-[7rem] py-12 flex flex-col justify-center items-center gap-5 ${
          !isDarkMode
            ? "bg-gradient-to-r from-[#F7FFFE] to-[#FBEEEE] border"
            : "" // Gradient for light mode
        }`}
      >
        <Swiper
          className="w-full h-full relative"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next-3",
            prevEl: ".swiper-button-prev-3",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <img
              src={imgBook}
              alt="Featured Book"
              className="w-[300px] lg:w-[413px] shadow-lg rounded"
            />
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-4">
              <h2
                className={`text-3xl lg:text-5xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                Featured Book
              </h2>
              <span className="text-sm uppercase text-[#7A7A7A]">
                By Timbur Hood
              </span>
              <h3
                className={`text-xl lg:text-3xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                }`}
              >
                Birds Gonna Be Happy
              </h3>
              <p className="text-sm text-wrap lg:text-lg text-[#7A7A7A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <span className="text-sm lg:text-2xl font-bold text-[#ED553B]">
                $ 45.00
              </span>
              <CustomButton><Link to="/home/books">view more</Link></CustomButton>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <img
              src={imgBook1}
              alt="Featured Book"
              className="w-[300px] lg:w-[413px] shadow-lg rounded"
            />
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-4">
              <h2
                className={`text-3xl lg:text-5xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                Featured Book
              </h2>
              <span className="text-sm uppercase text-[#7A7A7A]">
                By Timbur Hood
              </span>
              <h3
                className={`text-xl lg:text-3xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                }`}
              >
                Birds Gonna Be Happy
              </h3>
              <p className="text-sm text-wrap lg:text-lg text-[#7A7A7A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <span className="text-sm lg:text-2xl font-bold text-[#ED553B]">
                $ 45.00
              </span>
              <CustomButton><Link to="/home/books">view more</Link></CustomButton>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <img
              src={imgBook2}
              alt="Featured Book"
              className="w-[300px] lg:w-[413px] shadow-lg rounded"
            />
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-4">
              <h2
                className={`text-3xl lg:text-5xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                } `}
              >
                Featured Book
              </h2>
              <span className="text-sm uppercase text-[#7A7A7A]">
                By Timbur Hood
              </span>
              <h3
                className={`text-xl lg:text-3xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#393280]"
                }`}
              >
                Birds Gonna Be Happy
              </h3>
              <p className="text-sm text-wrap lg:text-lg text-[#7A7A7A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <span className="text-sm lg:text-2xl font-bold text-[#ED553B]">
                $ 45.00
              </span>
              <CustomButton><Link to="/home/books">view more</Link></CustomButton>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Banner/>
      <Subscibe/>
      <Articles/>
    </main>
    </>
  );
};

export default Home;
