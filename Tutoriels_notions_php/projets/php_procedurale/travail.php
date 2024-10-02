<?php
define('DSN','mysql:host=localhost;dbname=ecole');
define('USER','mamadou');
define('PASSWORD','passer');

try{
$connexion = new PDO (DSN,USER,PASSWORD);
$req= " select * from etudiants";
$result=$connexion->prepare($req);
$result->execute();

}catch(PDOException $e){
	die('Erreur de connexion'.$e->getMessage());
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Liste des etudiants</title>
</head>
<body>
<table border="2px">
	<thead><tr><td>Id</td><td>Prenom</td><td>Nom</td><td>Classe</td><td>Note</td></tr>
	</thead>
<tbody>
<?php while ($client = $result->fetch()) {?>
	<tr>
	<td> <?= $client['id'] ?></td>
	<td> <?= $client['prenom']?></td>
	<td> <?= $client['nom'] ?></td>
	<td> <?= $client['classe'] ?></td>
	<td> <?= $client['note'] ?></td>
	
	</tr>

<?php } ?> 	
</tbody>
</table>
</body>
</html>
