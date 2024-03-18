document.addEventListener("DOMContentLoaded", function (){
  function addCardIndex(cardIndex , list){
    const cardItems = document.querySelectorAll(".card .dynamicContent");
    const card = cardItems[cardIndex];
    for(let i=0; i<list.length ; i++){
      let p = document.createElement("p");
      p.textContent = list[i];
      p.classList.add("tech");
      card.appendChild(p);
    }
  }
  addCardIndex(0, ["HTML", "CSS" , "JS","NodeJS", "ExpressJS" , "SQL" ,  "Firebase"]);
  addCardIndex(1, ["Figma", "Adobe Photoshop" , "Adobe Illustrator"]);
  addCardIndex(2, ["Semrush", "Yoast SEO", "Google Search Console", "Grammarly"]);
  addCardIndex(3, ["Adobe Illustrator", "InVision", "Adobe Spark"]);
  addCardIndex(4, ["Adobe Illustrator", "Curve", "Procreate","Inkscape"]);

});
