<?php
// templates/t-list.php
  $title = 'Liste des etudiants';
  ob_start();
?>


<html>
<head>
    <title>Les etudiants </title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <header>
 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<marquee behavior="alternate" class=" bg-primary text-white "><h3>Bienvenue a l'ecole centrale des logiciels libres et de telecommunications</h3></marquee>
</header> 
<main class="flex-fill">
    <div class="offset-5 mt-5"><legend><h1><u>la liste des etudiants</u></h1></legend></div>
    <table class='table container table-hover table-bordered table-striped'>
<th>
<tr class='table table-dark'>
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
        <td ><button class="btn btn-success">Modifier</button></td>
        <td ><button class="btn btn-danger">Supprimer</button></td>
       
</tr>
</th>

       <?php endforeach; ?>
</tr>
<?php
  $content = ob_get_clean();
  include 'base_layout.php'
?>

</tbody>
</table>   
<button class="btn btn-danger offset-2">Ajouter un etudiant</button>
<footer></footer>
</body>
</html>

  