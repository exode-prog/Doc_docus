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
  if(!$connexion->query($sql))
  echo "Probleme de connexion a la table etudiants";
  else
  {	 echo $titre="<h2>La liste des noms et prenoms des etudiants</h2>";
	echo "<strong> NOM "."  "."PRENOM </strong>"."<br>";
  	foreach ($connexion->query($sql) as $row){
	echo $row['nom']."  ".$row['prenom']."<br>";
  	}
  }

?>
