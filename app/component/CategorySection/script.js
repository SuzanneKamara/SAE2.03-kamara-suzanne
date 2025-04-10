

// import des templates des films
let templateFile = await fetch("./component/MovieCard/template.html");
let template = await templateFile.text();


// import des teplate des category
let templateCategoryFile = await fetch("./component/CategorySection/template.html");
let templateCategory = await templateCategoryFile.text();

let CategorySection = {};

CategorySection.format = function (movie,cat,id) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  if (cat == movie.category_name) {
    
    html = html.replace("{{img}}", movie.image);
    html = html.replaceAll("{{title}}", movie.name);
    // html = html.replace("{{user_id}", id);
  }
 
  
 
  return html;
};



CategorySection.formatcat = function (cat,movies) {
  let html = templateCategory;
  let card='';
  html = html.replace("{{catname}}", cat);
  for (const elt of movies){
    card+=CategorySection.format(elt,cat);
  }
  html = html.replace("{{movies}}",card);
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

export { CategorySection };
