<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readAllController(){
 
    // PREMIERE VERIFICATION : LES PARAMETRES EXISTENT ET SONT NON VIDES
    // Vérification du paramètre 'semaine' 
    $namemovie = $_REQUEST['todo'];
    // si on arrive ici c'est que les paramètres existent et sont valides, on peut interroger la BDD
    // Appel de la fonction getMenu déclarée dans model.php pour extraire de la BDD le menu du jour spécifié
    if ($namemovie == 'readall'){
        $movie = getMovieAll($namemovie);
    }
    
    return $movie;
}

function readController(){
 
  // PREMIERE VERIFICATION : LES PARAMETRES EXISTENT ET SONT NON VIDES
  // Vérification du paramètre 'semaine' 
  $todo = $_REQUEST['todo'];
  $moviename = $_REQUEST['name'];
  // si on arrive ici c'est que les paramètres existent et sont valides, on peut interroger la BDD
  // Appel de la fonction getMenu déclarée dans model.php pour extraire de la BDD le menu du jour spécifié
  if ($todo == 'read'){
      $movie = getMovie($moviename);
  }
  
  return $movie;
}

function addController(){
    // Vérification du paramètre 'todo'
    
    print("le todo fonctionne");
      $name = $_REQUEST['name'];
  $year = $_REQUEST['year'];
  $movie_length = $_REQUEST['length'];
  $description = $_REQUEST['description'];
  $director = $_REQUEST['director'];
  $idcategory = $_REQUEST['idcategory'];
  $image = $_REQUEST['image'];
  $trailer = $_REQUEST['trailer'];
  $min_age = $_REQUEST['min_age'];
  // Mise à jour du menu à l'aide de la fonction updateMenu décrite dans model.php
  $ok = addMovie($name, $year, $movie_length, $description, $director, $idcategory, $image, $trailer, $min_age);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  return $ok;
  if ($ok!=0){
    print("Le film $name de $director à été ajouté avec succès");
    
  }
  else{
    return false;
  }

}


    

