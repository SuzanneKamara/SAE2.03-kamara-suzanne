// import des templates des films
let templateFile = await fetch("./component/SearchResults/template.html");
let template = await templateFile.text();

// importer les template de moviecard

let SearchResults = {};
SearchResults.formatcard = function (movie) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  
    html = html.replace("{{img}}", movie.image);
    html = html.replaceAll("{{title}}", movie.name);
    html = html.replaceAll("{{desc}}", movie.description);
  
 
  
  
  return html;
};

SearchResults.format = function (movies) {
    let card='';
    
    for (const elt of movies){
        card+=SearchResults.formatcard(elt);
        
    }
    return card;
}

export { SearchResults };