// Fonction init qui a pour but de lancer les autres fonctions
async function init() {
   // Je récupère la totalité des données de l'horoscope
   const horoscope = await getDatas();
 
   // Récupérer les données du capricorne et les afficher sur le DOM (index 2)
   displayHoroscope(horoscope[0]);
 
   // Afficher les données de l'horoscope dans left-horoscope et right-horoscope > entête de la section
   // données complètes, index en cours
   displaySectionHoroscope(horoscope, 0);
 }
 // On n'oublie pas de lancer notre fonction init, sinon rien ne fonctionne
 init();
 
 // Faire un fetch sur notre mock de données
 async function getDatas() {
   // Faire appel à mon mock de données
   const req = await fetch("../json/horoscope.json");
   return await req.json();
   // console.log(data[2]);
 }
 
 // Fonction qui permet de modifier le DOM pour afficher l'horoscope du signe qu'on lui envoi
 function displayHoroscope(horoscope) {
   // signe.signe
   // signe.date
   // Destructuration de données
   const {
     signe,
     date,
     amour,
     travail,
     argent,
     sante,
     famille,
     conseil,
     image,
   } = horoscope;
   document.querySelector("article > h1").textContent = signe;
   document.querySelector("#date").textContent = date;
 
   document.querySelector("#amour").innerHTML = `<span>Amour : </span> ${amour}`;
   document.querySelector(
     "#travail"
   ).innerHTML = `<span>Travail : </span> ${travail}`;
   document.querySelector(
     "#argent"
   ).innerHTML = `<span>Argent : </span> ${argent}`;
   document.querySelector("#sante").innerHTML = `<span>Sante : </span> ${sante}`;
   document.querySelector(
     "#famille"
   ).innerHTML = `<span>Famille et amis : </span> ${famille}`;
   document.querySelector(
     "#conseil"
   ).innerHTML = `<span>Conseil : </span> ${conseil}`;
 
   const aside = document.querySelector("aside > img");
   aside.src = image;
   aside.alt = signe;
 }
 
 function displaySectionHoroscope(horoscopes, index) {
   // Ternaires :
   // variable = condition ? valeur si vrai : valeur si faux
   indexPrev = index === 0 ? horoscopes.length - 1 : index - 1;
   indexNext = index + 1 > horoscopes.length - 1 ? 0 : index + 1;
 
   // Afficher dans l'entête de la section les données de l'horoscope -1 pour la gauche et +1 pour la droite
   document.querySelector(
     ".left-horoscope"
   ).innerHTML = `${horoscopes[indexPrev].signe} <span>${horoscopes[indexPrev].date}</span>`;
   document.querySelector(
     ".right-horoscope"
   ).innerHTML = `${horoscopes[indexNext].signe} <span>${horoscopes[indexNext].date}</span>`;
 }
//  Btn
 const arrow_right = document.querySelector('.arrow-right');
 let current_index = 0;
 arrow_right.addEventListener('click', async (e) => {
   e.preventDefault();
   const horoscope = await getDatas();
   current_index = current_index < horoscope.length - 1 ? current_index+1 : current_index = 0;
   displaySectionHoroscope(horoscope, current_index);
   displayHoroscope(horoscope[current_index]);
 });
 const arrow_left = document.querySelector('.arrow-left');
 arrow_left.addEventListener('click', async (e) => {
   e.preventDefault();
   const horoscope = await getDatas();
   current_index = current_index === 0 ? current_index = horoscope.length - 1 : current_index-1;
   displaySectionHoroscope(horoscope, current_index);
   displayHoroscope(horoscope[current_index]);
});
// Text
 const left_horoscope = document.querySelector('.left-horoscope');
 left_horoscope.addEventListener('click', async (e) => {
   e.preventDefault();
   const horoscope = await getDatas();
   current_index = current_index === 0 ? current_index = horoscope.length - 1 : current_index-1;
   displaySectionHoroscope(horoscope, current_index);
   displayHoroscope(horoscope[current_index]);
 });
 const right_horoscope = document.querySelector('.right-horoscope');
 right_horoscope.addEventListener('click', async (e) => {
   e.preventDefault();
   const horoscope = await getDatas();
   current_index = current_index < horoscope.length - 1 ? current_index+1 : current_index = 0;
   displaySectionHoroscope(horoscope, current_index);
   displayHoroscope(horoscope[current_index]);
});
// Date du jour
const date = new Date();
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const dayName = days[date.getDay()];
const day = date.getDate();
const monthName = months[date.getMonth()];
const year = date.getFullYear()
document.querySelector('#datejour').innerHTML = `Horoscope du ${dayName} ${day} ${monthName} ${year}`;
