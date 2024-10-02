<?php
if ($id && $prenom && $nom && $classe && $note){
	$resultat = modifier_etudiant($id, $prenom, $nom, $classe, $note);
	if($resultat){
		$title = $prenom;
 	        ob_start();
	        ?>
	        <h1>Mise a jour de l'etudiant(e)
	        <?php echo $prenom.' '.$nom ?>
	        </h1>
	        <?php
 	        echo ' Mise a jour des informations  de  '.$prenom."  ".$nom." "."en classe de ".$classe." "."avec une note de ".$note."<br>";
  	        $content = ob_get_clean();
	        include 'base_layout.php';

	}

}else{
	 echo "Cet etudiant n existe pas";

	
}
?>

