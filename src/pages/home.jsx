import Aside from "../components/aside"
import Header from "../components/header"
import Signes from "../components/signes"

function Home(){
   return (
      <>
         <Header />
         <main className="absolute left-[20%] pt-[5%] ">
            <Signes />
            <div className="flex">
               <div>
               <p className="pt-[5%]">-- HOROSCOPE DU 28/09/2023</p>
               <h1>CAPRICORNE</h1>
               <p>Amour : Ce mois-ci, les étoiles favorisent les relations pour les natifs du Capricorne. Vous serez plus ouvert et communicatif que d'habitude, ce qui facilitera la résolution des conflits et renforcera les liens avec votre partenaire. Si vous êtes célibataire, ne soyez pas surpris si de nouvelles personnes entrent dans votre vie. L'amour pourrait vous surprendre quand vous vous y attendrez le moins. <br />
               Travail : Votre détermination et votre éthique de travail seront récompensées ce mois-ci. Les opportunités professionnelles s'ouvriront à vous, mais n'oubliez pas de rester concentré sur vos objectifs à long terme. Une promotion ou une reconnaissance de vos compétences pourrait être à l'horizon. <br />
               Argent : La gestion financière sera essentielle ce mois-ci. Assurez-vous de suivre un budget strict et de prendre des décisions financières prudentes. Évitez les investissements risqués et concentrez-vous sur la stabilité à long terme. <br />
               Santé : Votre bien-être physique et mental est une priorité ce mois-ci. Prenez le temps de vous détendre et de vous ressourcer. La méditation, le yoga ou d'autres techniques de relaxation peuvent vous aider à maintenir un équilibre émotionnel. Veillez également à maintenir une alimentation équilibrée et à rester actif. <br />
               Famille et amis : Votre famille et vos amis joueront un rôle important dans votre vie ce mois-ci. Soyez attentif aux besoins de vos proches et passez du temps de qualité avec eux. Des moments chaleureux et mémorables sont à prévoir. <br />
               Conseil : Ce mois-ci, ne sous-estimez pas votre propre valeur. Vous avez les compétences et la détermination nécessaires pour atteindre vos objectifs. Soyez confiant et persévérant, et vous réussirez.
               </p>
               </div>
            <Aside />
            </div>
         </main>
      </>
   )
}

export default Home