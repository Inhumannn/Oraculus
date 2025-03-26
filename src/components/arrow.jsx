import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function Arrow(){
  return(
    // Ne prend pas de padding
  <div className="grid grid-cols-2 justify-items-center w-[100%] border-t border-[#BFBFBF]">
    <button className=""><IoIosArrowBack className="size-[35px] text-[#BFBFBF]"/></button>
    <button className=""><IoIosArrowForward className="size-[35px] text-[#BFBFBF]"/></button>
  </div>
  )
}
export default Arrow