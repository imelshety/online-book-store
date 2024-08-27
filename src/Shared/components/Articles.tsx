import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import img1 from "/assets/articles/art1.png";
import img2 from "/assets/articles/art2.png";
import img3 from "/assets/articles/art3.png";

import { Grid, useTheme } from "@mui/material";
import CustomButton from "./CustomButton";

const Articles = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode
  return (
    <section
      className={`w-full h-full mt-[7rem] py-12 flex flex-col justify-center items-center gap-5`}
    >
      <span
        className={`${
          isDarkMode ? "text-white" : "text-[#7A7A7A]"
        } font-[500] text-[13px] uppercase`}
      >
        Read our articles
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
        Latest Articles
      </h2>
      <Grid container spacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} mx="auto" paddingX="1rem" marginY={5}>
        <Grid item>
          <img
            src={img1}
            alt=""
            className="rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <span className="text=[#74642F] text-[15px]">2 aug, 2021</span>
          <h3
            className={`${isDarkMode ? "text-white" : "text-[#393280]"} leading-[43.16px] border-b-2 pb-4 text-[14px] lg:text-[20px]`}
          >Reading books always makes the moments happy</h3>
          <div className="w-full flex justify-end gap-4 mt-4">
            <FaFacebookF className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaTwitter className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaInstagram className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
          </div>
        </Grid>
        <Grid item>
          <img
            src={img2}
            alt=""
            className="rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <span className="text=[#74642F] text-[15px]">2 aug, 2021</span>
          <h3
            className={`${isDarkMode ? "text-white" : "text-[#393280]"} leading-[43.16px] border-b-2 pb-4 text-[14px] lg:text-[20px]`}
          >Reading books always makes the moments happy</h3>
          <div className="w-full flex justify-end gap-4 mt-4">
            <FaFacebookF className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaTwitter className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaInstagram className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
          </div>
        </Grid>
        <Grid item>
          <img
            src={img3}
            alt=""
            className="rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <span className="text=[#74642F] text-[15px]">2 aug, 2021</span>
          <h3
            className={`${isDarkMode ? "text-white" : "text-[#393280]"} leading-[43.16px] border-b-2 pb-4 text-[14px] lg:text-[20px]`}
          >Reading books always makes the moments happy</h3>
          <div className="w-full flex justify-end gap-4 mt-4">
            <FaFacebookF className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaTwitter className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
            <FaInstagram className="hover:text-[#ED553B] transition-all duration-500 ease-out"/>
          </div>
        </Grid>
      </Grid>
      <CustomButton>
      read all articles
      </CustomButton>
    </section>
  );
};

export default Articles;
