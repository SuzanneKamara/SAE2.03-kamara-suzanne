let templateFile1 = await fetch("./component/SearchBar/template.html");
let template1 = await templateFile1.text();

let templateFile2 = await fetch("./component/SearchBar/template.html");
let template2 = await templateFile2.text();

let SearchBar = {};


SearchBar.formatOp= function (data){
    let html = template2;
    html = html.replaceAll("{{moviename}}",data.name);
}

SearchBar.format = function (data){
    let html = template1;
    let op = ""
    for (const elt of data){
        op+=SearchBar.formatOp(elt);
    }
    html= html.replace("{{options}}", op);
    return html
}

export {SearchBar}