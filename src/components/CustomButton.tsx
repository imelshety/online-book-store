import { GoArrowRight } from "react-icons/go";
import { FC, ReactNode } from "react";

// Define type for CustomButton props
interface CustomButtonProps {
  children: ReactNode;
}

// CustomButton Component
const CustomButton: FC<CustomButtonProps> = ({ children }) => {
  return (
    <button className="text-[#393280] border-2 border-[#393280] rounded-[7px] py-4 px-7 uppercase flex gap-2 items-center justify-center hover:text-white hover:bg-[#393280] duration-500 transition-all ease-out">
      {children} <GoArrowRight />
    </button>
  );
};

export default CustomButton;
