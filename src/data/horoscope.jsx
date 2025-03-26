import { create } from 'zustand'

const horo = [
    {
      signe: "Capricorne",
      date: "22 décembre au 19 janvier",
      amour: "Les célibataires pourraient ressentir le besoin de stabilité et se tourner vers des relations sérieuses. En couple, il sera important de renforcer la communication pour éviter les malentendus. Prenez le temps de comprendre les besoins de votre partenaire et d'exprimer clairement les vôtres. L'honnêteté sera votre meilleure alliée pour construire une relation solide et équilibrée.",
      travail: "Vous serez très concentré sur vos objectifs professionnels et cela pourrait enfin porter ses fruits. Des opportunités d'évolution se présenteront, mais elles exigeront de la persévérance et une bonne organisation. Restez ouvert aux collaborations, car une aide extérieure pourrait être précieuse pour accélérer votre ascension.",
      argent: "Des dépenses imprévues pourraient survenir, nécessitant une gestion rigoureuse de votre budget. Évitez les achats impulsifs et privilégiez l'épargne pour assurer votre sécurité financière. Un investissement intelligent pourrait se révéler fructueux à long terme.",
      sante: "Votre niveau d'énergie fluctue, il est donc essentiel d'écouter votre corps. Adoptez une routine équilibrée, alliant activité physique et moments de repos. Privilégiez une alimentation saine pour éviter les baisses de régime et favoriser votre bien-être général.",
      famille: "Les relations familiales seront mises à l'épreuve, mais avec patience et diplomatie, vous parviendrez à désamorcer les tensions. Prenez le temps d'écouter et d'apporter votre soutien aux proches qui en ont besoin. Des retrouvailles agréables pourraient renforcer vos liens affectifs.",
      conseil: "Ne laissez pas le stress envahir votre quotidien. Organisez-vous et prenez du recul pour mieux gérer les défis qui se présentent. Chaque obstacle est une opportunité déguisée.",
      image: "/signes/capricorne.png"
    },
    {
      signe: "Verseau",
      date: "20 janvier au 18 février",
      amour: "Votre charme sera magnétique et attirera de nouvelles rencontres enrichissantes. Les célibataires pourraient vivre une romance inattendue et intense. En couple, privilégiez le dialogue et l'expérimentation pour casser la routine et raviver la flamme. Sortez de votre zone de confort pour explorer de nouvelles dynamiques amoureuses.",
      travail: "Votre créativité sera votre meilleur atout pour vous démarquer. Des projets innovants pourraient voir le jour, et votre audace sera récompensée. N'ayez pas peur d'exprimer vos idées, même si elles semblent hors du commun. Un mentor ou un collègue influent pourrait jouer un rôle clé dans votre progression.",
      argent: "Votre situation financière restera stable, à condition de ne pas vous laisser tenter par des achats impulsifs. Évitez les investissements risqués et privilégiez une gestion prudente de vos finances. Un projet lucratif pourrait se profiler à l'horizon si vous savez saisir les bonnes opportunités.",
      sante: "Votre vitalité sera au rendez-vous, mais attention à ne pas négliger votre sommeil. Un bon équilibre entre activité physique et moments de relaxation sera essentiel pour maintenir votre dynamisme. Pensez aussi à adopter une alimentation plus riche en vitamines pour booster votre énergie.",
      famille: "Les échanges avec vos proches seront harmonieux et constructifs. Vous saurez apporter un vent de fraîcheur dans votre cercle familial en proposant des activités originales et en favorisant la convivialité. Un événement familial marquant pourrait renforcer les liens avec un membre éloigné.",
      conseil: "Suivez votre intuition et osez prendre des décisions audacieuses. Votre originalité est une force, utilisez-la à bon escient pour atteindre vos objectifs.",
      image: "/signes/verseau.png"
    },
    {
      signe: "Poissons",
      date: "19 février au 20 mars",
      amour: "Les Poissons célibataires pourraient être surpris par un retour du passé ou une rencontre marquante. En couple, la complicité sera renforcée par des moments de partage et de tendresse. Il sera important d’écouter votre intuition pour naviguer sereinement dans vos relations et éviter les malentendus.",
      travail: "Votre imagination et votre sensibilité vous aideront à résoudre des problèmes complexes. Vous pourriez être sollicité pour un projet ambitieux qui demandera toute votre concentration. Restez ouvert aux conseils et ne laissez pas le doute freiner vos ambitions.",
      argent: "Une gestion prudente de vos finances sera nécessaire pour éviter les mauvaises surprises. Vous pourriez être tenté par un achat important, mais assurez-vous d’avoir bien évalué votre budget avant de vous lancer. Pensez aussi à mettre de côté pour l’avenir.",
      sante: "Votre énergie sera en dents de scie, il faudra donc veiller à bien vous reposer. Pratiquez une activité relaxante comme le yoga ou la méditation pour équilibrer votre mental et votre physique. Évitez les excès alimentaires et favorisez une alimentation légère.",
      famille: "Un climat apaisé règnera dans votre cercle familial, ce qui vous offrira un sentiment de sécurité et de bien-être. Prenez le temps de rendre visite à un proche qui pourrait avoir besoin de votre soutien. Votre empathie naturelle sera un atout pour apaiser les tensions.",
      conseil: "Faites confiance à votre intuition et ne doutez pas de votre valeur. Vous avez toutes les cartes en main pour avancer sereinement vers vos objectifs.",
      image: "/signes/poissons.png"
    },
    {
      signe: "Bélier",
      date: "21 mars au 19 avril",
      amour: "Les célibataires pourraient faire une rencontre décisive qui changera leur vision de l’amour. En couple, il sera temps d'apporter du renouveau pour casser la routine et raviver la passion. Soyez à l’écoute des besoins de votre partenaire et osez exprimer les vôtres. La sincérité et l’engagement seront les clés d’une relation épanouie.",
      travail: "Votre ambition sera au maximum, et vous serez prêt à relever tous les défis. Une opportunité professionnelle intéressante pourrait se présenter, mais elle demandera un engagement total. Prenez soin de bien peser le pour et le contre avant de vous lancer. Votre leadership sera remarqué, profitez-en !",
      argent: "Des gains inattendus pourraient améliorer votre situation financière, mais attention aux dépenses excessives. Il sera judicieux d’établir un budget clair et de mettre en place une stratégie d’épargne. Un conseil avisé pourrait vous aider à mieux gérer vos finances à long terme.",
      sante: "Votre énergie sera débordante, mais prenez garde à ne pas trop tirer sur la corde. Une activité physique régulière vous permettra de canaliser votre vitalité. Pensez à vous accorder des moments de relaxation pour éviter le surmenage.",
      famille: "Vous jouerez un rôle central dans votre cercle familial et serez sollicité pour résoudre des conflits ou prendre des décisions importantes. Restez diplomate et ouvert aux différentes opinions. Une sortie ou un voyage en famille pourrait renforcer vos liens.",
      conseil: "Foncez, mais avec stratégie ! Votre impulsivité est une force, à condition de l’utiliser intelligemment.",
      image: "/signes/belier.png"
    },
    {
      signe: "Taureau",
      date: "20 avril au 20 mai",
      amour: "Une période propice aux relations stables et sincères. Les célibataires pourraient développer des sentiments pour une personne de leur entourage proche. En couple, la tendresse et la complicité seront au rendez-vous. N’hésitez pas à organiser une escapade romantique pour renforcer vos liens.",
      travail: "Votre persévérance sera récompensée, mais il faudra sortir de votre zone de confort pour saisir de nouvelles opportunités. Une proposition intéressante pourrait émerger, nécessitant réflexion et audace. Faites preuve de patience et ne précipitez pas vos décisions.",
      argent: "Une gestion rigoureuse sera de mise pour éviter les imprévus. Vous pourriez être tenté par un investissement ou une dépense importante. Assurez-vous d’avoir bien étudié toutes les options avant de vous engager financièrement.",
      sante: "Votre bien-être général sera bon, mais attention à ne pas négliger votre alimentation. Privilégiez des repas équilibrés et évitez les excès. Une activité de détente comme la méditation ou la marche en pleine nature pourrait vous apporter un grand bien-être.",
      famille: "Des discussions profondes avec vos proches renforceront vos liens et permettront de régler d’éventuels malentendus. Vous pourriez recevoir un soutien moral important d’un membre de votre famille. Profitez de cette période pour créer de nouveaux souvenirs.",
      conseil: "Soyez patient et ne laissez pas la précipitation guider vos choix. La stabilité se construit avec le temps.",
      image: "/signes/taureau.png"
    },
    {
      signe: "Gémeaux",
      date: "21 mai au 20 juin",
      amour: "Les Gémeaux vont vivre une période dynamique sur le plan amoureux. Les célibataires pourraient faire des rencontres inattendues, mais il sera important de ne pas se laisser emporter par l'enthousiasme. En couple, la communication sera clé. Exprimez vos besoins et vos désirs pour éviter tout malentendu.",
      travail: "Sur le plan professionnel, de nouvelles idées et projets vous stimuleront. C'est le moment de faire preuve de créativité et d'oser sortir des sentiers battus. Toutefois, gardez à l’esprit qu’une organisation efficace sera nécessaire pour éviter la dispersion. Vous pourrez compter sur des partenaires pour vous soutenir.",
      argent: "Les finances des Gémeaux devraient être stables, mais quelques dépenses imprévues pourraient survenir. Soyez attentif à vos priorités financières et essayez de faire des économies là où cela est possible. La prudence sera votre meilleure alliée cette période.",
      sante: "Votre énergie sera au rendez-vous, mais attention à l'anxiété qui pourrait vous envahir. Prenez le temps de vous détendre et de déconnecter. Des activités comme le yoga ou la lecture vous aideront à retrouver votre équilibre mental.",
      famille: "Les relations familiales seront sereines, mais vous pourriez être amené à jouer un rôle de médiateur dans des discussions. Faites preuve de diplomatie et soyez à l’écoute de ceux qui vous entourent. Une réunion familiale pourrait renforcer les liens.",
      conseil: "Restez flexible et ouvert aux changements. Ne soyez pas trop rigide dans vos attentes, cela vous permettra de mieux saisir les opportunités qui se présenteront à vous.",
      image: "/signes/gemeaux.png"
    },
    {
      signe: "Cancer",
      date: "21 juin au 22 juillet",
      amour: "Les Cancers vivront une période de stabilité émotionnelle en amour. Les célibataires pourraient rencontrer quelqu'un qui correspond à leurs attentes profondes, mais il faudra faire preuve de patience avant de se lancer pleinement. En couple, la complicité et les échanges sincères seront à l'honneur. Un moment de douceur et de tendresse vous rapprochera encore plus.",
      travail: "Dans votre travail, vous ressentirez le besoin de trouver un équilibre entre ambition et sérénité. Vous pourriez être amené à faire face à de nouvelles responsabilités, mais avec votre sens de l'organisation, vous arriverez à gérer la situation. Gardez confiance en vos capacités, même si des obstacles surgissent.",
      argent: "Les finances seront plutôt équilibrées, mais vous pourriez avoir la tentation de faire des dépenses émotionnelles. Il est essentiel de rester pragmatique et de garder un œil sur vos priorités financières. Un plan d’épargne à long terme pourrait être une bonne idée.",
      sante: "Votre santé sera bonne dans l’ensemble, mais une attention particulière devra être portée à votre bien-être émotionnel. Le stress pourrait affecter votre énergie. Pensez à vous accorder des moments de relaxation, comme la méditation ou des promenades en nature, pour retrouver votre équilibre.",
      famille: "Les relations familiales seront très fortes pendant cette période. Vous passerez du temps avec vos proches et pourrez résoudre des tensions qui subsistaient. C’est un moment idéal pour créer des souvenirs ensemble et renforcer les liens familiaux.",
      conseil: "Prenez le temps de vous recentrer sur vous-même. L'écoute de vos émotions vous guidera vers les bonnes décisions. La patience et la douceur seront vos meilleures alliées cette période.",
      image: "/signes/cancer.png"
    },    
    {
      signe: "Lion",
      date: "23 juillet au 22 août",
      amour: "Les Lions vivront une période passionnée en amour. Les célibataires pourraient rencontrer quelqu’un qui saura les faire vibrer, mais attention à ne pas brûler les étapes. En couple, c’est un moment idéal pour raviver la flamme et renforcer la complicité. Des gestes tendres et des moments de partage feront toute la différence.",
      travail: "Votre énergie et votre créativité seront vos plus grands atouts cette période. Vous serez reconnu pour votre leadership, et de nouvelles opportunités professionnelles pourraient se présenter. Toutefois, veillez à ne pas trop vous disperser. Restez concentré sur vos priorités.",
      argent: "Les finances des Lions devraient être plutôt favorables. Cependant, des tentations de dépenses pourraient survenir. Restez vigilant et réfléchissez bien avant de faire des achats impulsifs. Une gestion financière équilibrée vous permettra de faire face à tout imprévu.",
      sante: "Votre forme physique sera excellente, mais votre enthousiasme pourrait vous pousser à vous surmener. Pensez à prendre des pauses et à vous reposer suffisamment. Une activité sportive régulière vous permettra de maintenir votre énergie tout en évitant le stress.",
      famille: "Les relations familiales seront équilibrées, avec une communication fluide. Des discussions importantes pourraient avoir lieu, mais elles se dérouleront dans un esprit constructif. Profitez de cette période pour renforcer les liens avec vos proches et créer des moments de convivialité.",
      conseil: "Faites confiance à votre instinct et à vos capacités. Ne laissez pas les doutes vous freiner. Vous êtes capable de grandes choses, il suffit de croire en vous et de foncer.",
      image: "/signes/lion.png"
    },
    {
      signe: "Vierge",
      date: "23 août au 22 septembre",
      amour: "Les Vierges vivront une période de réflexion en amour. Les célibataires pourraient ressentir le besoin de prendre du recul avant de se lancer dans une nouvelle relation. En couple, une communication sincère et un partage d’émotions profondes renforceront les liens. N’hésitez pas à exprimer vos besoins et à ouvrir votre cœur.",
      travail: "Sur le plan professionnel, une période de travail intense vous attend. Votre sens de l’organisation et votre rigueur seront des atouts précieux. Toutefois, évitez de vous laisser submerger par les détails et pensez à déléguer lorsque cela est nécessaire. Des opportunités intéressantes pourraient se présenter à vous, mais elles nécessiteront une prise de décision rapide.",
      argent: "Votre gestion financière sera une priorité. Vous serez prudent dans vos dépenses et vous vous concentrerez sur des investissements à long terme. C’est le moment idéal pour revoir votre budget et mettre en place des stratégies d’épargne efficaces.",
      sante: "Votre santé sera stable, mais vous pourriez ressentir de la fatigue due à votre emploi du temps chargé. Il est important de prendre soin de votre bien-être en vous accordant des moments de relaxation. Une activité physique modérée, comme la marche, pourrait vous aider à rester en forme et à libérer votre esprit.",
      famille: "Les relations familiales seront harmonieuses. Vous serez d’un grand soutien pour vos proches, et vos conseils seront appréciés. Ce sera une période idéale pour passer du temps avec votre famille et renforcer les liens qui vous unissent.",
      conseil: "Soyez à l’écoute de vos émotions, mais n’oubliez pas de garder un certain équilibre. La clé de votre épanouissement se trouve dans la gestion de votre temps et de vos priorités. Prenez soin de vous avant tout.",
      image: "/signes/vierge.png"
    },    
    {
      signe: "Balance",
      date: "23 septembre au 22 octobre",
      amour: "Les Balances vivront une période harmonieuse en amour. Les célibataires pourraient faire une rencontre marquante, mais il sera important de ne pas idéaliser trop vite. En couple, l’équilibre et la compréhension mutuelle seront présents. C’est le moment idéal pour renforcer la complicité et la confiance dans votre relation.",
      travail: "Sur le plan professionnel, des opportunités intéressantes pourraient se présenter. Vous serez amené à prendre des décisions importantes, mais il sera crucial de peser le pour et le contre avant de vous lancer. Votre diplomatie et votre sens de la collaboration seront vos alliés pour réussir.",
      argent: "Votre situation financière sera stable, mais quelques ajustements seront nécessaires pour mieux gérer vos finances à long terme. Vous pourriez envisager des investissements plus sûrs ou revoir vos habitudes de dépenses. La prudence sera la clé pour éviter toute surprise financière.",
      sante: "Votre santé sera en bonne forme, mais vous pourriez être plus sensible aux changements de saison. Prenez soin de votre bien-être en adoptant une routine équilibrée. L'exercice physique léger et une alimentation saine seront bénéfiques pour votre vitalité.",
      famille: "Les relations familiales seront douces, et vous aurez l’occasion de passer des moments agréables avec vos proches. Un soutien moral de la part d’un membre de votre famille pourrait vous apporter un grand réconfort. Profitez de ce temps pour renforcer les liens et apaiser les tensions éventuelles.",
      conseil: "Gardez votre calme et faites confiance à votre jugement. L’harmonie dans vos relations et la prise de décision réfléchie seront les clés de votre succès pendant cette période.",
      image: "/signes/balance.png"
    },
    {
      signe: "Scorpion",
      date: "23 octobre au 21 novembre",
      amour: "Les Scorpions vivront une période passionnée en amour. Les célibataires pourraient rencontrer quelqu'un qui suscite des émotions fortes, mais il sera important de ne pas se laisser envahir par l'intensité des sentiments. En couple, la complicité et les échanges profonds seront au cœur de la relation. Les moments de vérité renforceront vos liens.",
      travail: "Au travail, vous serez plus déterminé que jamais. C’est le moment de prendre des initiatives et de vous engager pleinement dans vos projets. Des défis pourraient surgir, mais vous saurez les surmonter avec votre persévérance. Attention toutefois à ne pas vous laisser emporter par l'ambition et à garder un équilibre dans vos priorités.",
      argent: "Les finances des Scorpions seront stables, mais vous pourriez ressentir le besoin de sécuriser votre avenir financier. Ce sera le moment de réfléchir à des investissements judicieux. Faites preuve de discernement avant de prendre des décisions financières importantes.",
      sante: "Votre santé sera bonne, mais vous pourriez être un peu plus sensible au stress. Prenez soin de votre bien-être mental en vous accordant des moments de calme et de relaxation. Une activité physique régulière, comme la course ou la natation, pourrait vous aider à maintenir votre énergie.",
      famille: "Les relations familiales seront solides, mais vous pourriez être amené à résoudre un conflit ou à clarifier un malentendu. Votre capacité à aller au fond des choses sera précieuse pour restaurer l'harmonie. Profitez de cette période pour approfondir les liens familiaux et partager des moments de qualité.",
      conseil: "Laissez-vous guider par votre intuition et n'ayez pas peur d’aller au-delà des apparences. Vous êtes capable de grandes choses, il vous suffit de croire en vous et de foncer.",
      image: "/signes/scorpion.png"
    },
    {      
      signe: "Sagittaire",
      date: "22 novembre au 21 décembre",
      amour: "Les Sagittaires vivront une période dynamique et pleine de découvertes en amour. Les célibataires pourraient rencontrer une personne qui éveillera leur curiosité, mais attention à ne pas se laisser emporter trop rapidement. En couple, l’aventure et l’enthousiasme seront au rendez-vous. Un voyage ou une nouvelle activité à deux pourrait renforcer vos liens.",
      travail: "Sur le plan professionnel, de nouvelles opportunités passionnantes pourraient se présenter. C’est le moment de prendre des risques calculés et de sortir de votre zone de confort. Votre optimisme et votre capacité à voir grand vous permettront d’atteindre vos objectifs, mais attention à ne pas négliger les détails importants.",
      argent: "Les finances des Sagittaires seront en équilibre, mais des dépenses imprévues pourraient surgir. Soyez prudent et évitez les achats impulsifs. C’est une bonne période pour revoir vos priorités financières et planifier à long terme pour garantir une certaine sécurité.",
      sante: "Votre santé sera bonne, mais vous pourriez avoir tendance à vous surmener. Prenez le temps de vous reposer et d’équilibrer votre emploi du temps pour éviter l’épuisement. Une activité sportive régulière, comme la randonnée ou le vélo, vous aidera à maintenir votre énergie tout en vous détendant.",
      famille: "Les relations familiales seront plutôt harmonieuses. Cependant, des discussions importantes pourraient avoir lieu, nécessitant de l’écoute et de la compréhension. Profitez de ce moment pour renforcer vos liens et passer du temps de qualité avec vos proches.",
      conseil: "Restez ouvert aux nouvelles expériences et ne craignez pas l’inconnu. Parfois, prendre un chemin différent vous mènera vers des opportunités incroyables. La confiance en vous est la clé pour réussir.",
      image: "/signes/sagittaire.png"
    }        
  ]
  const useHoroscopeData = create((set) => ({
    horoscope: horo,
    currentIndex: 0,
    prev: () => set((state) => ({
      currentIndex: state.currentIndex === 0 ? state.horoscope.length - 1 : state.currentIndex - 1
    })),
    next: () => set((state) => ({
      currentIndex: state.currentIndex === state.horoscope.length - 1 ? 0 : state.currentIndex + 1
    })),
  }))

export default useHoroscopeData