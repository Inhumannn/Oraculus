// BDD
async function zodiacSign(){
   try{
      const req = await fetch('/json/horoscope.json');
      const res = await req.json();
      return res;
   }catch(error){
      console.error(error);
   };
};
// Display
async function zodiacSignDisplay(){
   try{
      // Récupère
      const array = await zodiacSign();
      // Recherche
      // const sign = array.find(element => element.signe === 'Capricorne');
      const sign = array[0];
      // Si trouver affiche
      if(sign){
         document.querySelector('#amour').textContent = sign.amour;
         document.querySelector('#travail').textContent = sign.travail;
         document.querySelector('#argent').textContent = sign.argent;
         document.querySelector('#sante').textContent = sign.sante;
         document.querySelector('#famille').textContent = sign.famille;
         document.querySelector('#conseil').textContent = sign.conseil;         
         // Pourchanger l'image plus tard
         // document.querySelector('#image').src = sign.image; 
      }
   }catch(error){
      console.error(error);
   };
};
zodiacSignDisplay();