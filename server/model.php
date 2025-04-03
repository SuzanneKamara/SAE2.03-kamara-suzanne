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


/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $w La semaine pour laquelle le menu est récupéré.
 * @param string $j Le jour pour lequel le menu est récupéré.
 * @return array Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */
function getMovie($n){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select name, year, length, description, director, image from Category where name=:name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':name', $n);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}
