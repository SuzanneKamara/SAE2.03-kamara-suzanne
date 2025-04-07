// import des templates des films
let templateMovieFile = await fetch("./component/MovieCard/template.html");
let templateMovie = await templateMovieFile.text();
// import des teplate des category
let templateCategoryFile = await fetch("./component/CategorySection/template.html");
let templateCategory = await templateCategoryFile.text();


let CategorySection = {};

CategorySection.format = function (data) {
  let html = templatedata;
  let html2 = templateCategory
  // let url = "../server/images/"+ movie.image;
  html2 = html2.replace("{{catname}}", data.category_name);
  html2 = html2.replaceAll("{{movies}}", html);
  return html2;
};

CategorySection.formatMany = function (data) {
  let html = '';
    for (const cat of data.Id_category) {
        html += CategorySection.format(cat);
    }
    return html;
};

export { CategorySection };
