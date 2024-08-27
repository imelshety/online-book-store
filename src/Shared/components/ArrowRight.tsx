import { FaArrowRightLong } from 'react-icons/fa6'

const ArrowRight = () => {
  return (
    <div className=" group absolute top-2/3 right-2  transform -translate-y-1/2 z-50 cursor-pointer w-[48.71px] h-[48.71px] bg-white border border-[#ED553B] hover:text-white hover:bg-[#ED553B] transition-all duration-500 ease-out rounded-full flex justify-center items-center">
    <FaArrowRightLong className="text-lg text-[#ED553B] group-hover:text-white" />
  </div>
  )
}

export default ArrowRight