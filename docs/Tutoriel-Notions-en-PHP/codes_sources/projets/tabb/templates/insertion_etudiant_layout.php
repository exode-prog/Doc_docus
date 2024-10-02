<?php
if ($prenom && $nom && $classe && $note){

	$resultat = inserer_etudiant($prenom, $nom, $classe, $note);
	if($resultat){
		$title = $prenom;
 	        ob_start();
	        ?>
	        <h1>Enregistrement de l'etudiant(e)
	        <?php echo $prenom.' '.$nom ?>
	        </h1>
	        <?php
 	        echo ' Insertion reussie de  '.$prenom."  ".$nom." "."en classe de ".$classe." "."avec une note de ".$note."<br>";
  	        $content = ob_get_clean();
	        include 'base_layout.php';

	}       

}else{

	echo "Veuillez renseigner toutes les informations de l'etudiant";

	
}
?>

