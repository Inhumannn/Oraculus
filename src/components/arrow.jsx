import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useHoroscopeData from "../data/horoscope.jsx";
function Arrow(){
  const {next, prev} = useHoroscopeData()
  return(
  <div className="grid grid-cols-2 justify-items-center w-[100%] border-t border-[#BFBFBF]">
    <button className="py-[20px]" onClick={prev}><IoIosArrowBack className="size-[35px] text-[#BFBFBF]"/></button>
    <button className="py-[20px]" onClick={next}><IoIosArrowForward className="size-[35px] text-[#BFBFBF]"/></button>
  </div>
  )
}
export default Arrow