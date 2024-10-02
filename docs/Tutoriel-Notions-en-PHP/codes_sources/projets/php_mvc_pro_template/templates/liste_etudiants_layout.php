<?php
// templates/t-list.php
  $title = 'Liste des etudiants';
  ob_start();
?>


<html>
<head>
    <title>Les etudiants </title>
</head>
<body>
    <h1>la liste des etudiants</h1>
    <table border='1'>
<th>
<tr>
	<td>ID</td>
    <td>PRENOM</td>
	<td>NOM</td>
	<td>CLASSE</td>
	<td>NOTE</td>
</tr>
</th>


       <?php foreach ($etudiants as $etudiant): ?>
<tbody>
<tr>
        <td><?php echo $etudiant->id ?></td>
        <td><?php echo $etudiant->prenom ?></td>
        <td><?php echo $etudiant->nom ?></td>
        <td><?php echo $etudiant->classe ?></td>
        <td><?php echo $etudiant->note ?></td>
</tr>
</th>

       <?php endforeach; ?>
</tr>
<?php
  $content = ob_get_clean();
  include 'base_layout.php'
?>

</tbody>
</body>
</html>

