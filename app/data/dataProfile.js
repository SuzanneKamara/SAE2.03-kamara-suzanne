let HOST_URL = "https://mmi.unilim.fr/~kamara4/SAE2.03-kamara-suzanne";

let DataProfile={};

DataProfile.read = async function (){
     // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readuser");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    console.log(data);
    // Enfin, on retourne ces données.
    return data;
}
export {DataProfile};