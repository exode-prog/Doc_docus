
<?php

if($id){
	$result= supprimer_etudiant_par_id($id);
	if($result){
		echo " Suppression de l'etudiant reussie";
	}else{
		echo" Erreur pendant la suppression";
	}
	
}


      

?>
