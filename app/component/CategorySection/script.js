

// import des templates des films
let templateFile = await fetch("./component/MovieCard/template.html");
let template = await templateFile.text();


// import des teplate des category
let templateCategoryFile = await fetch("./component/CategorySection/template.html");
let templateCategory = await templateCategoryFile.text();

let CategorySection = {};

CategorySection.format = function (movie,cat) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  if (cat == movie.category_name) {
    
    html = html.replace("{{img}}", movie.image);
    html = html.replaceAll("{{title}}", movie.name);
    html = html.replace("{{category__name}}", movie.category_name);
    
    // html = html.replace("{{user_id}", id);
  }
 
  
 
  return html;
};



CategorySection.formatcat = function (cat,movies) {
  let html = templateCategory;
  let card='';
  html = html.replaceAll("{{catname}}", cat);
  for (const elt of movies){
    card+=CategorySection.format(elt,cat);
  }
  html = html.replace("{{movies}}",card);
  // CategorySection.showSlides(cat)
  return html;
  

}



CategorySection.formatMany = function(data){
  
  
  let category = '';
  
  let categories= Object.groupBy(data, ({ category_name }) => category_name);

    for (const elt of Object.entries(categories)){
        let cat= elt[0];
        let movies= elt[1];
     
        category += CategorySection.formatcat(cat,movies);
        
        }
        
        return category;
        
      }
       
    
    
    
;



// carousel pour les films par catégories
let slideIndexCat = 1;


CategorySection.showSlides = function(cat) {
  // C.handlerCarouselStart();

  let i;
  let slides = document.getElementsByClassName('"'+cat+'"');

  console.log(slides);
  
  for (let j = 1; j < slides.length; j++) {
    slides[0].style.display = "flex";
      slides[j].style.display = "none";  
  }
  if (n > slides.length) {
    slideIndexCat = 1;
  }    
  if (n < 1) {
    slideIndexCat = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexCat-1].style.display = "flex";  
  
}
CategorySection.plusSlides = function(n) {
  CategorySection.showSlides(slideIndexCat += n);
}

export { CategorySection };
