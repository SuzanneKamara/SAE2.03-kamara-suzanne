let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateFileOp = await fetch("./component/NavBar/templateOption.html");
let templateOp = await templateFileOp.text();

let NavBar = {};

NavBar.format = function (data) {
  let Op='';
  let html = template;
  
  html = html.replace("{{hAbout}}");
  for (const user of data){
    
    Op+=NavBar.formatOp(user)
  }
  html = html.replace("{{profiles}}", Op)
  return html;
};

NavBar.formatOp = function (user){
  
  let htmlOp= templateOp;
  htmlOp=htmlOp.replace('{{value}}',user);
  
  htmlOp=htmlOp.replace('{{placeholder}}',user.name);
  return htmlOp
}

export { NavBar };
