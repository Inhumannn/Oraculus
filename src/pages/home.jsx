import Header from "../components/header"
import Signes from "../components/signes"

function Home(){
   return (
      <>
         <Header />
         <main className="absolute left-[20%]">
            <Signes />
           
         </main>
      </>
   )
}

export default Home