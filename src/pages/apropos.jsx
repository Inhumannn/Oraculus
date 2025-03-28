import Aside from "../components/aside";
import Header from "../components/header";

function APropos() {
  return (
    <div>
      <Header />
      <main className="absolute left-[20%] grid grid-cols-[auto_40%]">
        <section className="h-[598px] overflow-scroll">
          <h1 className="text-[36px] pt-[100px] pb-[3px]">À propos d'Oraculus</h1>
          <p className="text-[#808080]">Bienvenue sur Oraculus, votre source de guidance céleste au quotidien ! Nous sommes ravis de vous accueillir dans notre espace dédié à l'exploration de l'astrologie et à la découverte des étoiles.</p>
          <article>
              <h2 className="text-[24px] pt-[10px] pb-[3px]">Notre mission</h2>
              <p className="text-[#808080]">Chez Oraculus, notre mission est de vous offrir des horoscopes du jour inspirants, informatifs et divertissants. Nous croyons en la puissance des astres pour éclairer nos vies et nous guider dans nos choix. Que vous soyez un fervent adepte de l'astrologie ou simplement curieux, notre objectif est de vous fournir des prévisions astrologiques précises et pertinentes pour vous accompagner tout au long de votre journée.</p>
          </article>
          <article>
              <h2 className="text-[24px] pt-[10px] pb-[3px]">Ce que nous proposons</h2>
              <ul className="list-disc pl-[20px]">
                <li className="text-[#808080]">Horoscopes Personnalisés : Découvrez ce que les étoiles réservent à votre signe astrologique chaque jour.</li>
                <li className="text-[#808080]">Conseils pour l'Épanouissement Personnel : Explorez des articles et des conseils pour mieux comprendre votre signe, votre personnalité et vos relations.</li>
                <li className="text-[#808080]">Ressources Astrologiques : Plongez dans l'univers fascinant de l'astrologie avec nos ressources éducatives et nos guides.</li>
                <li className="text-[#808080]">Communauté Engagée : Rejoignez notre communauté d'amoureux des étoiles pour partager vos expériences, poser des questions et échanger des idées.</li>
              </ul>
          </article>
          <article>
              <h2 className="text-[24px] pt-[10px] pb-[3px]">Notre engagement</h2>
              <p className="text-[#808080]">Chez Oraculus, nous sommes déterminés à offrir des horoscopes et des informations astrologiques de qualité. Notre équipe d'experts en astrologie travaille dur pour vous fournir des prévisions précises et basées sur les positions des planètes. Nous nous engageons également à respecter votre vie privée et à protéger vos données personnelles.</p>
          </article>
          <article>
              <h2 className="text-[24px] pt-[10px] pb-[3px]">Rejoignez-nous</h2>
              <p className="text-[#808080]">Explorez Oraculus pour découvrir ce que les astres vous réservent aujourd'hui. Que vous cherchiez des conseils pour votre carrière, des indications sur l'amour et les relations, ou simplement une dose quotidienne d'inspiration, vous trouverez tout cela ici. Rejoignez-nous dans cette aventure astrologique et laissez les étoiles éclairer votre chemin.</p>
              <p className="text-[#808080]">Merci de faire partie de la communauté Oraculus, et que les étoiles vous guident vers un avenir radieux !</p>
              <p className="text-[#808080] text-end pb-[10px]">L'équipe Oraculus</p>
          </article>
        </section>
        <Aside />
      </main>
    </div>
  )
}
export default APropos