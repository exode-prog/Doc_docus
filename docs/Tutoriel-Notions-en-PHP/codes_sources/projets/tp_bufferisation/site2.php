
<?php
  $title = 'Je suis le site 2';
  ob_start();
?>
  <h1>Apprentissage de la bufferisation</h1>
<h2>Les fonctions  de la bufferisation</h2>
  <ul>
 
<li>ob_start() : Cette fonction démarre la bufferisation..</li>
<li>On peut également   ensuite utiliser d'autres fonctions pour gérer le contenu du tampon :<li>
<li>ob_get_contents() : Récupère le contenu actuel du tampon sans l'effacer.</li>
<li>ob_end_flush() : Envoie le contenu du tampon au navigateur et désactive la bufferisation.</li>
<li>ob_clean() : Efface le contenu du tampon sans l'envoyer.</li>
<li>Ob_get_clean() : Obtiens le contenu du tampon de sortie actif et désactive-le</li>

  </ul>
<?php
  $content = ob_get_clean();
  include 'base.php'
?>

