

// import des templates des films
let templateFile = await fetch("./component/MovieCard/template.html");
let template = await templateFile.text();


// import des teplate des category
let templateCategoryFile = await fetch("./component/CategorySection/template.html");
let templateCategory = await templateCategoryFile.text();

let CategorySection = {};

CategorySection.formatcard = function (movie) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  
  html = html.replace("{{img}}", movie.image);
  html = html.replaceAll("{{title}}", movie.name);
  
 
  return html;
};




CategorySection.format = function (data,cat) {
  let html2 = templateCategory;
  // let url = "../server/images/"+ movie.image;
  html2 = html2.replace("{{catname}}", cat);
  
  let card = '';
    for (const movie of data) {
      if(movie.category_name==cat){
        card += CategorySection.formatcard(movie);
      }
      html2 = html2.replace("{{movies}}",card);
      
    }
  
  return html2;
};


CategorySection.formatMany = function (data) {
  let html = '';
  let categories= Object.groupBy(data, ({ category_name }) => category_name);
  console.log(categories);
    // for (let i=0; i<categories.length; i++) {
    //   if (categories[i].length==0){
    //     return "il n'y a pas de film dans cette categorie pour l'instant";
    //   }
      
    //     html += CategorySection.format(data, categories[i]);
    // }
    // 
    for (const elt of Object.entries(categories)) {
      for( const movie of elt){
        console.log(movie);
        html +=CategorySection.format(movie,elt[0])
      }
    
    } 
    return html;  
};

export { CategorySection };
