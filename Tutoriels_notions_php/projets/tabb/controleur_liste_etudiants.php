<?php
  
  require_once 'modele.php';

  $etudiants = lister_les_etudiants();

  require 'templates/liste_etudiants_layout1.php';
?>
