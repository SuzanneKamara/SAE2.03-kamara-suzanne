let MoviePage = {};


  let templateFile = await fetch("./component/MoviePage/template.html");
  let template = await templateFile.text();

MoviePage.format = function (movie) {
  let html = template; 
  let data = movie[0];
  html = html.replace("{{img}}", data.image);
  html = html.replace("{{title}}", data.name);
  html = html.replace("{{description}}", data.description);
  html = html.replace("{{rating}}", data.min_age);
  html = html.replace("{{date}}", data.year);
  html = html.replace("{{genre}}", data.category_name);
  html = html.replace("{{duration}}", data.length);
  html = html.replace("{{director}}", data.director);
  html = html.replace("{{trailer}}", data.trailer);
  return html;
};



export { MoviePage };
