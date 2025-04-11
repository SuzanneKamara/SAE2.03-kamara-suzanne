let templateFile = await fetch("./component/MovieCard/template.html");
let template = await templateFile.text();

let MovieCard = {};

MovieCard.format = function (movie) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  html = html.replace("{{img}}", movie.image);
  html = html.replaceAll("{{title}}", movie.name);
  html = html.replace("{{id_movie}}", movie.id);
  console.log(movie.id);
  return html;
};

MovieCard.formatMany = function (movies) {
  let html = '';
    for (const movie of movies) {
        html += MovieCard.format(movie);
    }
    return html;
};

export { MovieCard };
