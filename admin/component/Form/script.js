

let templateFile = await fetch('./component/Form/template.html');
let template = await templateFile.text();


let Form = {};


Form.format = function(){
    
    let html= template;
    // html = html.replace("{{logs}}", formatHistory());
    return html;
}


export {Form};

