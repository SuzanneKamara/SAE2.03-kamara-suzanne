
// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~kamara4/SAE2.03-kamara-suzanne";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataUser = {};

DataUser.read = async function (){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
   // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
   // L'URL finale dépend de la valeur de HOST_URL et de dir.
   let answer = await fetch(HOST_URL + "/server/script.php?todo=readuser");
   // answer est la réponse du serveur à la requête fetch.
   // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
   // Ces données (data) sont automatiquement converties en objet JavaScript.
   let data = await answer.json();
   
   // Enfin, on retourne ces données.
   return data;
}

DataUser.readUser = async function (id){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
   // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
   // L'URL finale dépend de la valeur de HOST_URL et de dir.
   let answer = await fetch(HOST_URL + "/server/script.php?todo=readuserSing&id="+id);
   // answer est la réponse du serveur à la requête fetch.
   // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
   // Ces données (data) sont automatiquement converties en objet JavaScript.
   let data = await answer.json();
   
   // Enfin, on retourne ces données.
   return data;
}



/** DataUser.adduser
 * 
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */
DataUser.adduser = async function (fdata) {
    // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
    //  - method : la méthode HTTP à utiliser (GET, POST...)
    //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
        
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=adduser", config);
    let data = await answer.json();
    // return data;
    if (data.error) {
        alert(data.error);
    }
    else {
        return "l'utilisateur a été ajouté";
    }   
    
}


/** DataUser.adduser
 * 
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */
DataUser.update = async function (fdata) {
    // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
    //  - method : la méthode HTTP à utiliser (GET, POST...)
    //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
        
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=updateuser", config);
    let data = await answer.json();
    // return data;
    if (data.error) {
        alert(data.error);
    }
    else {
        return "l'utilisateur a été ajouté";
    }   
    
}

export {DataUser};




/* Rappel : async / await ?
    
   Il y a des instructions qui prennent du temps sans qu'on puisse prédire combien.
   fetch (et answer.json() ) en font partie.
   Il n'est en effet pas possible de savoir combien de temps le serveur prendra à nous répondre.
   Peut-être même qu'il est en panne et ne répondra pas du tout !
   Le mot clé await permet de dire à javascript qu'il faut ATTENDRE la réponse du serveur avant de 
   poursuivre l'exécution du code (sinon on va vouloir lire les données avant de les avoir reçues).
   Et pour pouvoir utiliser await, il faut ajouter le mot clé async à la fonction.

*/
