
import { useTheme } from "@mui/material/styles";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import shape1 from "/assets/shapes/shape1-footer.png";
import shape2 from "/assets/shapes/shape2-footer.png";

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode
  
  return (
    <footer className={`${!isDarkMode? 'bg-[#ED553B]':''} w-full py-10 lg:py-20 relative`}>
         {/* shapes */}
         <img src={shape1} alt="shape" className="absolute top-0 -left-5"/>
         <img src={shape2} alt="shape" className="absolute bottom-0 -right-5"/>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-5 lg:px-20 gap-12 lg:gap-0">
       
        {/* Social Media and Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/assets/footerlogo.png"
            alt="Logo"
            className="mb-4"
          />
          <p className={`text-white text-sm text-center lg:text-left mb-4`}>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-4">
            <FaFacebookF className={`${!isDarkMode ?'text-white':''} text-lg`} />
            <FaLinkedinIn className={`${!isDarkMode ?'text-white':''} text-lg`} />
            <FaTwitter className={`${!isDarkMode ?'text-white':''} text-lg`} />
            <FaYoutube className={`${!isDarkMode ?'text-white':''} text-lg`} />
          </div>
        </div>

        {/* Company Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold uppercase mb-4 text-white">Company</h3>
          <ul className="flex flex-col gap-2">
            <li className={`text-white text-sm`}>Home</li>
            <li className={`text-white text-sm`}>About Us</li>
            <li className={`text-white text-sm`}>Books</li>
            <li className={`text-white text-sm`}>New Release</li>
            <li className={`text-white text-sm`}>Contact Us</li>
            <li className={`text-white text-sm`}>Blog</li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold uppercase mb-4 text-white">Important Links</h3>
          <ul className="flex flex-col gap-2">
            <li className={`text-white text-sm`}>Privacy Policy</li>
            <li className={`text-white text-sm`}>FAQs</li>
            <li className={`text-white text-sm`}>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-around items-center pt-16">
        <p className={`text-white text-sm`}>© 2022 Arihant. All Rights Reserved.</p>
        <p className={`text-white text-sm`}>Privacy | Terms of Service</p>

      </div>
    </footer>
  );
};

export default Footer;
