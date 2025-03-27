import Aside from "../components/aside"
import Header from "../components/header"

function Contact(){
  return(
    <div>
      <Header />
      <main>
        <section>
            <h1>Contacter ORACULUS</h1>
            <p>Nous sommes ravis que vous souhaitiez entrer en contact avec nous ! Chez Oraculus, nous sommes là pour répondre à toutes vos questions, suggestions ou préoccupations. Votre opinion compte, et nous sommes déterminés à vous offrir la meilleure expérience possible.</p>
            <form action="#">
                <input type="text" name="name" id="name" placeholder="blbal"/>
                <input type="text" name="name" id="name"  />
                <input type="email" name="mail" id="mail" />
                <textarea name="" id="">blabla</textarea>
                <input type="submit" value="" />
            </form>
        </section>
        <Aside />
      </main>
    </div>
  )
}
export default Contact