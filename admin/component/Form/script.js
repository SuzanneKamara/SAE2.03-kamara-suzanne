

let templateFile = await fetch('./component/Form/template.html');
let template = await templateFile.text();

let templateFile2 = await fetch('./component/Form/templateOp.html');
let template2 = await templateFile2.text();

let Form = {};


Form.format = function(categories){
    let Op = "";
    let html= template;
    for (const cat of categories){
        Op+=Form.op(cat);
    }
    html = html.replace('{{op}}',Op);
    // html = html.replace("{{handlerAdd}}", handler);
    return html;
}

Form.autofill = function(movie){


    
    // let inputEntree = document.querySelector("input[name=entree]"); 
    let id= document.querySelector("div.updmovie input[name=id]");
    id.value= movie.id;
    let name= document.querySelector("div.updmovie input[name=name]");
    name.value= movie.name;
    let year= document.querySelector("div.updmovie input[name=year]");
    year.value=movie.year;
    
    let length= document.querySelector("div.updmovie input[name=length]");
    length.value=movie.length;

    let description= document.querySelector("div.updmovie input[name=description]");
    description.value=movie.description;
    
    let director= document.querySelector("div.updmovie input[name=director]");
    director.value=movie.director;

    let image= document.querySelector("div.updmovie input[name=image]");
    image.value=movie.image;

    let trailer= document.querySelector("div.updmovie input[name=trailer]");
    trailer.value=movie.trailer;

    let age= document.querySelector("div.updmovie input[name=min_age]");
    age.value=movie.min_age;
    

    let op=document.querySelector("select.inputUpd ").options;
    var arr = Array.from(op);
    console.log(arr);
    for (const elt of arr){
        if (elt.value==movie.id_category){
            elt.selected=true;
        }
    }

    

    
    
    
    let radio1= document.querySelector("#showcaseChoice1upd");
    let radio2= document.querySelector("#showcaseChoice2upd");
    if (movie.showcase==true){
        radio1.checked = true;
        
    }
    else{
        radio2.checked = true;
        
    }
    

}


Form.op = function(category){
    let html = template2
    
        html = html.replaceAll("{{id_category}}",category.id);
        html = html.replace("{{category_name}}",category.name);
        return html;
    
}



export {Form};

