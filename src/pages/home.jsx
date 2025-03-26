import Aside from "../components/aside";
import Header from "../components/header";
import Signes from "../components/signes";
import useHoroscopeData from "../data/horoscope.jsx";

function Home(){
   const { horoscope, currentIndex} = useHoroscopeData();
   const currentHoroscope = horoscope[currentIndex];

   const today = new Date()
   const day = today.getDate()
   const month = today.getMonth()
   const year = today.getFullYear()
   const date = `${day}/0${month}/${year}`
   return (
      <>
         <Header />
         <main className="absolute left-[20%] pt-[2%] ">
            <Signes />
            <section className="grid grid-cols-2" >
               <div className="h-[507px] overflow-scroll">
                  <p className="text-[16px] pt-[10%]">-- HOROSCOPE DU {date}</p>
                  <h1 className="text-[42px] pb-[20px]">{currentHoroscope.signe}</h1>
                  <article>
                  <p className="text-[14px] pb-[12px]">{currentHoroscope.date}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Amour : </span>{currentHoroscope.amour}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Travail : </span>{currentHoroscope.travail}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Argent : </span>{currentHoroscope.argent}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Santé : </span>{currentHoroscope.sante}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Famille et amis: </span>{currentHoroscope.famille}</p>
                  <p className="text-[14px] pb-[12px] text-[#908F8F]"><span className="text-black">Conseil : </span>{currentHoroscope.conseil}</p>
                  </article>
               </div>
            <Aside />
            </section>
            <img src={currentHoroscope.image} alt="" className="fixed top-[25%] right-[16%] w-[22%]"/>
         </main>
      </>
   )
}

export default Home