<?php
if (empty($person['prenom']) && empty($person['nom'])){


        echo "Aucun etudiant est enregistre sur cet ID";

}else{

	
	$title = $person['nom'];
 	ob_start();
	?>
	<h1>Details sur
	<?php echo $person['prenom'].' '.$person['nom'] ?>
	</h1>
	<?php
 	 echo ' vous etes sur le dossier de '.$person['prenom']."  ".$person['nom']." "."il est en classe de ".$person['classe']." "."il a une note de ".$person['note']."<br>";
  	$content = ob_get_clean();
	include 'base_layout.php';
}
?>

