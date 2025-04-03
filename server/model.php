<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "kamara4");
define("DBLOGIN", "kamara4");
define("DBPWD", "kamara4");



function getMovieAll(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select id,name,image from Movie WHERE 1;";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    // $stmt->bindParam(':name', $n);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $n La semaine pour laquelle le menu est récupéré.
 * @param string $y Le jour pour lequel le menu est récupéré.
 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */

function addMovie($n, $y,$l,$d,$dir,$c, $i,$t){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "insert into Movie values(':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l);
    $stmt->bindParam(':description', $d);
    $stmt->bindParam(':director', $dir);
    $stmt->bindParam(':idcategory', $c);
    $stmt->bindParam(':image', $i);
    $stmt->bindParam(':trailer', $t);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}
