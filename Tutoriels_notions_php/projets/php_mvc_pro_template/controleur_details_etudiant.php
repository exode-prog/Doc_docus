<?php

  require_once 'modele.php';
  $person = details_etudiant_par_id($_GET['id']);
  require 'templates/details_etudiant_layout.php';
?>

