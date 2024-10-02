<?php

  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }
  function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();
  
  }
  
  function inserer_etudiant($prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="insert into etudiants (prenom,nom,classe,note) values (:prenom, :nom, :classe, :note)";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
  }
  function modifier_etudiant($id, $prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="update  etudiants set prenom = :prenom,nom =:nom, classe=:classe, note =:note where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
    
  }
  function supprimer_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select count(*) from etudiants where id = :id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();

      if($stmt->fetchColumn() > 0){
        //$connexion=connect_db();
        $sql1="delete from etudiants where id=:id";
        $stmt1=$connexion->prepare($sql1);
        $stmt1->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt1->execute();
        return $stmt1;


      }else{
        return null;
      }
     
  }
