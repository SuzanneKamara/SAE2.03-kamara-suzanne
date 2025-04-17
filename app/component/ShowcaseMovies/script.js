

// import des templates des films
let templateFile = await fetch("./component/ShowcaseMovies/template.html");
let template = await templateFile.text();


// import des teplate des category
let template2File = await fetch("./component/ShowcaseMovies/template1.html");
let template2 = await template2File.text();

let ShowcaseMovies = {};

ShowcaseMovies.format = function (movie) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  
    html = html.replace("{{img}}", movie.image);
    html = html.replaceAll("{{title}}", movie.name);
    html = html.replaceAll("{{desc}}", movie.description);
  
 
  
 
  return html;
};



ShowcaseMovies.formatShowcase = function (movies) {
  let html = template2;
  let card='';
  
  for (const elt of movies){
    card+=ShowcaseMovies.format(elt);
    
  }
  html = html.replace("{{showcaseMovies}}",card);
  return html;

}    
;

export { ShowcaseMovies };
