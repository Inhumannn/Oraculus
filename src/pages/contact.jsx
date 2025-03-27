import Aside from "../components/aside"
import Header from "../components/header"

function Contact(){
  return(
    <div>
      <Header />
      <main className="absolute left-[20%] grid grid-cols-[auto_60%]">
        <section className="h-[598px] overflow-scroll">
          <h1 className="text-[36px] pt-[100px] pb-[3px]">Contacter ORACULUS</h1>
          <p className="text-[#808080]">Nous sommes ravis que vous souhaitiez entrer en contact avec nous ! Chez Oraculus, nous sommes là pour répondre à toutes vos questions, suggestions ou préoccupations. Votre opinion compte, et nous sommes déterminés à vous offrir la meilleure expérience possible.</p>
          <form action="#" className="my-[50px] grid grid-cols-1 border border-[#808080] py-[100px] px-[60px] gap-[20px]">
              <input type="text" name="name" id="name" placeholder="VOTRE PRENOM" className="border-b border-[#BFBFBF]"/>
              <input type="text" name="name" id="name"  placeholder="VOTRE NOM" className="border-b border-[#BFBFBF]"/>
              <input type="email" name="mail" id="mail" placeholder="VOTRE E-MAIL" className="border-b border-[#BFBFBF]"/>
              <textarea name="" id="" placeholder="VOTRE MESSAGE" className="border-b border-[#BFBFBF]" />
              <input type="submit" value="ENVOYER" className="text-[#8E8E8E] border border-[#BFBFBF] py-[20px]"/>
          </form>
        </section>
        <Aside />
      </main>
    </div>
  )
}
export default Contact