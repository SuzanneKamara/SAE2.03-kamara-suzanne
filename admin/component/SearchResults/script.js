// import des templates des films
let templateFile = await fetch("./component/SearchResults/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/MovieCard/template.html");
let template2 = await templateFile2.text();
// importer les template de moviecard

let SearchResults = {};
SearchResults.formatcard = function (movie) {
  let html = template2;
  // let url = "../server/images/"+ movie.image;
  
    html = html.replace("{{img}}", movie.image);
    html = html.replaceAll("{{title}}", movie.name);
    html = html.replaceAll("{{desc}}", movie.description);
  
 
  
  
  return html;
};

SearchResults.format = function (movies) {
  let html = template;
    let card='';
    
    for (const elt of movies){
        card+=SearchResults.formatcard(elt);
        
    }
    html = html.replace("{{results}}",card);
    return html;
}

export { SearchResults };