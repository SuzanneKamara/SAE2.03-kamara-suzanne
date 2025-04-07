

let templateFile = await fetch('./component/FormUser/template.html');
let template = await templateFile.text();


let FormUser = {};


FormUser.format = function(){
    
    let html= template;
    // html = html.replace("{{handlerAdd}}", handler);
    return html;
}


export {FormUser};

