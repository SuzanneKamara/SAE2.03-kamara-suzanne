let templateFile = await fetch("./component/MovieCard/template.html");
let template = await templateFile.text();

let MovieCard = {};

MovieCard.format = function () {
  let html = template;
  // html = html.replace("{{img}}", hAbout);
  // html = html.replace("{{title}}", hAbout);
  return html;
};

export { MovieCard };
