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



// function getMovieAll(){
//     // Connexion à la base de données
//     $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
//     // Requête SQL pour récupérer le menu avec des paramètres
//     $sql = "select id,name,image from Movie WHERE 1;";
//     // Prépare la requête SQL
//     $stmt = $cnx->prepare($sql);
//     // Lie le paramètre à la valeur
//     // $stmt->bindParam(':name', $n);
//     // Exécute la requête SQL
//     $stmt->execute();
//     // Récupère les résultats de la requête sous forme d'objets
//     $res = $stmt->fetchAll(PDO::FETCH_OBJ);
//     return $res; // Retourne les résultats
// }


/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $movie La semaine pour laquelle le menu est récupéré.

 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */
function getMovie($movie){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "SELECT Movie.id, Movie.name, Movie.year, Movie.length, Movie.description, Movie.director, Movie.id_category,Movie.image,Movie.trailer, Movie.min_age, Category.name AS 'category_name' 
    FROM `Movie` left join Category on Category.id = Movie.id_category WHERE Movie.name= :movie;";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':movie', $movie);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

/**
 * @param int $age La semaine pour laquelle le menu est récupéré.

 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */
function getAllMovies($age){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "SELECT Movie.name, Movie.year, Movie.length, Movie.description, Movie.director,Movie.image,Movie.trailer, Movie.min_age, Movie.id , Category.name AS 'category_name' 
    FROM `Movie` left join Category on Category.id = Movie.id_category   WHERE   Movie.min_age<:age;";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age);
    // Lie le paramètre à la valeur
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
 * @param string $l Le plat principal pour le jour spécifié.
 * @param string $d Le dessert pour le jour spécifié.
 * @param string $dir Le nom du directeur pour le jour spécifié.
 * @param string $c La catégorie pour le jour spécifié.
 * @param string $i L'image pour le jour spécifié.
 * @param string $t La bande-annonce pour le jour spécifié.
 * @param string $min_age L'âge minimum requis pour le jour spécifié.
 
 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */

function addMovie($n, $y,$l,$d,$dir,$c, $i,$t, $min_age,$showcase){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "insert into 'Movie' values(Null,':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    $sql = "INSERT INTO Movie  
    (id, name, year, length, description, director, id_category, image, trailer, min_age, showcase) 
    VALUES (NULL, :name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age,:showcase);";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l);
    $stmt->bindParam(':description', $d);
    $stmt->bindParam(':director', $dir);
    $stmt->bindParam(':id_category', $c);
    $stmt->bindParam(':image', $i);
    $stmt->bindParam(':trailer', $t);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->bindParam(':showcase', $showcase);
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->rowCount(); 
    return $res;

}


 

function readUser(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select * from User WHERE 1;";
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
 * @param string $pp Le jour pour lequel le menu est récupéré.
 * @param string $ Le plat principal pour le jour spécifié.
 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */


function addUser($n, $pp,$r){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "insert into 'Movie' values(Null,':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    $sql = "INSERT INTO User  
    (id, name, profile_pic, restriction_age) 
    VALUES (NULL, :name, :profile_pic, :restriction_age);";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':profile_pic', $pp);
    $stmt->bindParam(':restriction_age', $r);
    
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->rowCount(); 
    return $res;
}
/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $id La semaine pour laquelle le menu est récupéré.
 * @param string $name Le jour pour lequel le menu est récupéré.
 * @param string $img Le plat principal pour le jour spécifié.
 * @param string $age Le plat principal pour le jour spécifié.
 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */

function updUser($id,$name,$img,$age){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "REPLACE INTO Repas (name, profile_pic, restriction_age) 
    //         VALUES (:name, :img, :age) ;";
    $sql="UPDATE User 
    SET name = :name, profile_pic = :img, restriction_age = :age
    WHERE id=:id;";
    
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':img', $img);
    $stmt->bindParam(':age', $age);
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->rowCount(); 
    return $res;
}

/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $id La semaine pour laquelle le menu est récupéré.
 * @return array Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */
function readSingUser($id){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select * from User WHERE id=:id;";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':id', $id);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

/**
 * Récupère le menu pour un jour spécifique dans la base de données.
 *
 * @param string $id_movie La semaine pour laquelle le menu est récupéré.
 * @param string $id_user Le jour pour lequel le menu est récupéré.
 * @return int Un tableau d'objets contenant l'entrée, le plat principal et le dessert pour le jour spécifié.
 */


 function addFav($id_movie, $id_user){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "insert into 'Movie' values(Null,':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    $sql = "INSERT INTO Favorites  
    (id_movie, id_user) 
    VALUES (:id_movie, :id_user);";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':id_user', $id_user);
    $stmt->bindParam(':id_movie', $id_movie);
    
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->rowCount(); 
    return $res;
}

function delFav($id_movie, $id_user){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "insert into 'Movie' values(Null,':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    $sql = "DELETE FROM Favorites  
    WHERE id_user = :id_user AND id_movie = :id_movie";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':id_user', $id_user);
    $stmt->bindParam(':id_movie', $id_movie);
    
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->rowCount(); 
    return $res;
}

function readUserId( $name){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    // $sql = "insert into 'Movie' values(Null,':name',':year',':lenght',':description',':director',':id_category',':image',':trailer');" ;
    $sql = "SELECT id FROM User  
    WHERE name =:name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':name', $name);
    
    // Exécute la requête SQL
    $stmt->execute();
    
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}