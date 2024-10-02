<?php
define('DSN','mysql:host=localhost;dbname=ecole');
define('USER','mamadou');
define('PASSWORD','passer');

try{
$connexion = new PDO (DSN,USER,PASSWORD);
$req= " select * from etudiants";
$result=$connexion->prepare($req);
$result->execute();

}catch(PDOException $e){
        die('Erreur de connexion'.$e->getMessage());
}
?>
