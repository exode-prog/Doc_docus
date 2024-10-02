<?php
  define('dsn', 'mysql:host=localhost;dbname=ecole');
  define('user', 'mamadou');
  define('password', 'passer');
  try{
  $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e){
  printf("Echec connexion : %s\n", $e->getMessage());
  exit();
  }
  $sql="select * from etudiants";
  $stmt=$connexion->prepare($sql);
  $stmt->execute();
  $result=$stmt->fetchALL(PDO::FETCH_OBJ);
  if(!$connexion->prepare($sql))
       echo "Erreur de connexion a la table etudiants";
   else
   {
       foreach ($result as $row){
           $etudiants[]=$row;
       }
       require_once "templates/liste_etudiants.php";
   }

?>
