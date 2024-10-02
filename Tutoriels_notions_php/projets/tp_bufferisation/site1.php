
<?php
  $title = 'Je suis le site 1';
  ob_start();
?>
  <h1>Apprentissage de la bufferisation</h1>
<h2>Les avantages de la bufferisation</h2>
  <ul>
  <li>Contrôle sur la Sortie </li>
  <li>Éviter les Erreurs "Headers Already Sent"</li>
  <li> Optimisation des Performances </li>
  <li> Chargement Asynchrone </li>
  <li>Facilité d'Implémentation </li>

  </ul>
<?php
  $content = ob_get_clean();
  include 'base.php'
?>

