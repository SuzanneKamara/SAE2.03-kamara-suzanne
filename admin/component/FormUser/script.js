

let templateFile = await fetch('./component/FormUser/template.html');
let template = await templateFile.text();

let templateFileOp = await fetch("./component/FormUser/templateOption.html");
let templateOp = await templateFileOp.text();

let FormUser = {};


FormUser.format = function(data){
    let Op='';
    let html= template;
    for (const user of data){
    
        Op+=FormUser.formatOp(user)
      }
      html = html.replace("{{optuser}}", Op)
    return html;
}

FormUser.formatOp = function (user){
  
    let htmlOp= templateOp;
    htmlOp=htmlOp.replace('{{value}}',user.restriction_age);
    
    htmlOp=htmlOp.replace('{{placeholder}}',user.name);
    return htmlOp
  }
export {FormUser};

