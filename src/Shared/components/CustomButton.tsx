import { GoArrowRight } from "react-icons/go";
import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material";

// Define type for CustomButton props
interface CustomButtonProps {
  children: ReactNode;
}

// CustomButton Component
const CustomButton: FC<CustomButtonProps> = ({ children }) => {
  const theme = useTheme(); // Access the current theme

  const isDarkMode = theme.palette.mode === "dark";
  return (
    <button
      className={`${
        !isDarkMode
          ? "text-[#061C2B] border-[#061C2B] hover:text-white hover:bg-[#061C2B]"
          : " text-white border-[#ED553B] hover:text-[#ED553B] hover:bg-white"
      }  border-2  rounded-[7px] py-4 px-7 uppercase flex gap-2 items-center justify-center  duration-500 transition-all ease-out`}
    >
      {children} <GoArrowRight />
    </button>
  );
};

export default CustomButton;
