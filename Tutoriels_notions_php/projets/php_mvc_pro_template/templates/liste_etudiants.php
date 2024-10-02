<head>
    <title>Les etudiants </title>
</head>
<body>
    <h1>la liste des etudiants</h1>
    <table border='1'>
<th>
<tr>
	<td>PRENOM</td>
	<td>NOM</td>
	<td>CLASSE</td>
	<td>NOTE</td>
</tr>
</th>


       <?php foreach ($etudiants as $etudiant): ?>
<tbody>
<tr>
        <td><?php echo $etudiant->prenom ?></td>
        <td><?php echo $etudiant->nom ?></td>
        <td><?php echo $etudiant->classe ?></td>
        <td><?php echo $etudiant->note ?></td>
</tr>
</tbody>

       <?php endforeach; ?>

</body>
</html>

