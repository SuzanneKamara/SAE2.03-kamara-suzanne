

let templateFile = await fetch('./component/Form/template.html');
let template = await templateFile.text();


let Form = {};


Form.format = function(handler){
    
    let html= template;
    html = html.replace("{{handlerAdd}}", handler);
    return html;
}


export {Form};

