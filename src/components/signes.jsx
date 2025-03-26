import useHoroscopeData from "../data/horoscope.jsx";
function Signes() {
  const {next, prev} = useHoroscopeData()
  return (
    <div className="flex flex-row gap-[40px] items-center pl-[10%]">
      <button className="border-t border-[#BFBFBF]" onClick={prev}>
        <p className="text-start">Sagittaire </p>
        <p>22 NOV AU 21 DEC</p>
      </button>
      <button className="border-t border-[#BFBFBF]" onClick={next}>
        <p className="text-start">Cancer</p>
        <p>22 NOV AU 21 DEC</p>
      </button>
    </div>
  );
}
export default Signes