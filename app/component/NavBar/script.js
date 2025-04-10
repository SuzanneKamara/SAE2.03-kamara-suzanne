let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateFileOp = await fetch("./component/NavBar/templateOption.html");
let templateOp = await templateFileOp.text();

let NavBar = {};

NavBar.format = function (data) {
 
  let Op='';
  let html = template;
  
  // html = html.replace("{{hAbout}}");
  for (const user of data){
    
    Op+=NavBar.formatOp(user);
    
  }
  html = html.replace("{{profiles}}", Op)
  return html;
};

NavBar.formatOp = function (user){
  // let html = template;
  let htmlOp= templateOp;
  
  htmlOp=htmlOp.replace('{{value}}',user.restriction_age);
  
  htmlOp=htmlOp.replace('{{placeholder}}',user.name);
  htmlOp = htmlOp.replace("{{user_id}}", user.id);
  console.log(user.id);

  return htmlOp
}


export { NavBar };
