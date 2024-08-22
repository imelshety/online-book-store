import { useTheme } from "@mui/material";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if the current theme is dark mode

  return (
    <section
      className={`${
        isDarkMode ? "bg-[#061C2B]" : "bg-[#FCEBEA]"
      } w-full h-full mt-16 lg:mt-[8rem] relative overflow-hidden pb-20`}
    >
      {/* Shape Decorations */}
      <img
        src="/assets/shapes/shape1.png"
        alt=""
        className="hidden lg:block absolute top-0 left-0 z-0"
      />
      <img
        src="/assets/shapes/shape2.png"
        alt=""
        className="hidden lg:block absolute bottom-0 -left-12 z-0"
      />
      <img
        src="/assets/shapes/shape3.png"
        alt=""
        className="hidden lg:block absolute -bottom-8 -right-8 z-0"
      />

      {/* Subscription Content */}
      <div className="bg-[#ED553B] w-4/5 mx-auto flex flex-col justify-center items-center gap-6 lg:gap-12 py-10 lg:py-24 rounded-lg z-20 relative">
        <h2
          className={`text-base lg:text-[56px] mt-4 font-semibold ${
            isDarkMode ? "text-[#393280]" : "text-white"
          }`}
        >
          Subscribe to Our Newsletter
        </h2>
        <p className="lg:w-1/2 text-white text-center text-sm lg:text-[20px] leading-10">
          Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
          consectetur. Elit adipiscing enim pharetra hac.
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-lg py-2 lg:p-4 bg-white rounded overflow-hidden shadow-lg absolute -bottom-20 lg:-bottom-12">
          <div className="flex items-center px-4">
            <TfiEmail />
          </div>
          <input
            type="email"
            placeholder="youremail123@gmail.com"
            className="flex-1 py-4 px-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#ED553B] text-white px-2 lg:px-16 py-4 uppercase font-semibold hover:bg-[#D9442C] transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
