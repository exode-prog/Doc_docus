<?php

require_once 'modele.php';

$id = $_GET['id'];
$prenom = $_GET['prenom'];
$nom = $_GET['nom'] ;
$classe = $_GET['classe'] ;
$note = $_GET['note'] ;
require 'templates/modification_etudiant_layout.php';

/*if ($prenom && $nom && $classe && $note) {

    
    $resultat = inserer_etudiant($prenom, $nom, $classe, $note);

    if ($resultat) {
        echo "Étudiant ajouté avec succès.";
    } else {
        echo "Erreur lors de l'ajout de l'étudiant.";
    }
} else {
    echo "Veuillez fournir toutes les informations requises.";
}*/
?>


