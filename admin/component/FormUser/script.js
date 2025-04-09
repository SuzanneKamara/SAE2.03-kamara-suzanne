

let templateFile = await fetch('./component/FormUser/template.html');
let template = await templateFile.text();

let templateFileOp = await fetch("./component/FormUser/templateOption.html");
let templateOp = await templateFileOp.text();

let FormUser = {};

// FormUser.autoFill = function(profile){
//     // let id = document.querySelector("select[id=id]");
    
//   let inputName = document.querySelector("#nameuser");
//   console.log(inputName); 
//   let inputPP = document.querySelector("#ppuser"); 
//   let inputAge = document.querySelector("#rauser"); 
  
  
//   inputName.value = profile.name;
//   console.log(inputName); 
//   inputPP.value = profile.profile_pic;
//   inputAge.value = profile.restriction_age;


  
// }

FormUser.format = function(data){
  
    let Op='';
    let html= template;
    for (const elt of data){
      Op+=FormUser.formatOp(elt);
      
    }
      
      html = html.replace("{{optuser}}", Op)
    return html;
}

FormUser.formatOp = function (user){

    let htmlOp= templateOp;
    htmlOp=htmlOp.replace('{{value}}',user.id);
    
    htmlOp=htmlOp.replace('{{placeholder}}',user.name);
    return htmlOp
    
  
  }
export {FormUser};

// if (res.length >0){
//   NewMenuForm.autoFill(res[0]);
//   V.renderLog("Menu trouvé pour la semaine " +week+" et le jour " + day);
// }
// else{
//   NewMenuForm.autoFill({entree:"", plat:"", dessert:""});
//   V.renderLog("Aucun menu trouvé pour la semaine " +week+" et le jour " + day);
// }
