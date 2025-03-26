import useHoroscopeData from "../data/horoscope.jsx";
function Signes() {
  const {next, prev, horoscope, currentIndex} = useHoroscopeData()
  let currentHoroscopePrev = horoscope[currentIndex - 1];
  currentHoroscopePrev = currentIndex === 0 ? horoscope[horoscope.length - 1] : horoscope[currentIndex - 1];
  let currentHoroscopeNext = horoscope[currentIndex + 1];
  currentHoroscopeNext = currentIndex === horoscope.length - 1 ? horoscope[0] : horoscope[currentIndex + 1];
  return (
    <div className="flex flex-row gap-[40px] items-center pl-[10%]">
      <button className="border-t border-[#BFBFBF]" onClick={prev}>
        <p className="text-start">Sagittaire </p>
        <p>{currentHoroscopePrev.date}</p>
      </button>
      <button className="border-t border-[#BFBFBF]" onClick={next}>
        <p className="text-start">Cancer</p>
        <p>{currentHoroscopeNext.date}</p>
      </button>
    </div>
  );
}
export default Signes