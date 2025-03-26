import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function Arrow(){
  return(
  <div className="grid grid-cols-2 justify-items-center w-[100%] border-t border-[#BFBFBF]">
    <button className="py-[20px]"><IoIosArrowBack className="size-[35px] text-[#BFBFBF]"/></button>
    <button className="py-[20px]"><IoIosArrowForward className="size-[35px] text-[#BFBFBF]"/></button>
  </div>
  )
}
export default Arrow