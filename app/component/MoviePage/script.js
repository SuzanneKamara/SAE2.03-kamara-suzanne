let templateFile = await fetch("./component/MoviePage/template.html");
let template = await templateFile.text();

let MoviePage = {};

MoviePage.format = function (movie) {
  let html = template;
  // let url = "../server/images/"+ movie.image;
  html = html.replace("{{img}}", movie.image);
  html = html.replace("{{title}}", movie.name);
  html = html.replace("{{description}}", movie.description);
  html = html.replace("{{rating}}", movie.min_age);
  html = html.replace("{{release}}", movie.year);
  html = html.replace("{{genre}}", movie.category);
  html = html.replace("{{duration}}", movie.length);
  html = html.replace("{{director}}", movie.director);
  return html;
};



export { MoviePage };
