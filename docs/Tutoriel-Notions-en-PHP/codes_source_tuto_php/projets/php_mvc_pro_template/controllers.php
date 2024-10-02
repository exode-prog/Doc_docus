<?php
//liste de nos controleurs
  function lecture_action()
  {
    $etudiants = lister_les_etudiants();
    require 'templates/liste_etudiants_layout.php';

  }


  function detail_action($id)
  {
   $person = details_etudiant_par_id($_GET['id']);
   require 'templates/details_etudiant_layout.php';
  }


  function insertion_action($prenom,$nom,$classe,$note)
  {
   $prenom = $_GET['prenom'] ;
   $nom = $_GET['nom'] ;
   $classe = $_GET['classe'] ;
   $note = $_GET['note'] ;
   require 'templates/insertion_etudiant_layout.php';

   
  }

  function modification_action($id,$prenom,$nom,$classe,$note)
  {
   $id = $_GET['id'];
   $prenom = $_GET['prenom'];
   $nom = $_GET['nom'] ;
   $classe = $_GET['classe'] ;
   $note = $_GET['note'] ;
   require 'templates/modification_etudiant_layout.php';
  }

  function suppression_action($id)
  {
   $id=$_GET['id'];
   require 'templates/supprimer_etudiant_layout.php';
  }
?>

