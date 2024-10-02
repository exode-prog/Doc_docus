---
sidebar_position: 4
---

# C. TEMPLATE, BUFFERISATION, LAYOUT EN PHP

## a. Presentation des  templates

Template terme anglais et que veut dire gabarit est une notion très importante utilisée en programmation. Son principe est de séparer le code PHP de la mise en page HTML ; Le code PHP dans un fichier, la mise en page contenant les balises HTML dans un autre fichier. On se retrouve alors avec, d’un côté, le script qui fait tout ce qu’il a à faire (ex: récupération de données dans une base de données, traitement…), et d’un autre côté, la mise en page avec des zones prédéfinies où seront placées les données générées par le script. Cette pratique est beaucoup utilisée dans une architecture MVC (model view controller) et le Template est orienté à la partie de la présentation la partie vue qui est le view.
L’avantage évident est de pouvoir travailler uniquement sur la mise en page, sans modifier quoi que ce soit dans le code PHP et inversement, ou de diviser efficacement le travail à faire, le programmeur s’occupant uniquement de la partie Scripting, et le designeur, de la mise en page.

import template from '/img/template.png';

<img src={template} alt="Image Php" style={{width: 900}}/>
***Figure: Architecture d'un template***


## b. La bufferisation avec ob_start

### i. Présentation
Cette fonction ob_start () active la mise en mémoire tampon de la sortie. Lorsque la mise en mémoire tampon est active, aucune sortie n'est envoyée depuis le script ; au lieu de cela, la sortie est stockée dans une mémoire tampon interne. Elle joue un rôle de conteneur qu’on peut stocker des données à l’intérieur et l’utiliser et le détruire. Cette notion est importante en programmation et s’implémente dans la partie vue du modèle MVC.


### ii. Fonctionnement de Ob_start ()

- ob_start() : Cette fonction démarre la bufferisation. À partir de ce moment, toute sortie générée par le script est stockée dans le tampon.
- On peut également   ensuite utiliser d'autres fonctions pour gérer le contenu du tampon :
- ob_get_contents() : Récupère le contenu actuel du tampon sans l'effacer.
- ob_end_flush() : Envoie le contenu du tampon au navigateur et désactive la bufferisation.
- ob_clean() : Efface le contenu du tampon sans l'envoyer.
- Ob_get_clean() : Obtiens le contenu du tampon de sortie actif et désactive-le 

Pour connaitre d’autres fonctions de la bufférisation on peut consulter le lien suivant :  https://www.php.net/manual/fr/function.ob-get-clean.php



### iii.  Avantages de la Bufferisation


-  **Contrôle sur la Sortie**
Permet de modifier ou d'inspecter la sortie avant qu'elle ne soit envoyée. Cela peut être utile pour ajouter des éléments à la fin ou pour effectuer des remplacements.
• Éviter les Erreurs "Headers Already Sent" 
Éviter les erreurs liées à l'envoi prématuré des en-têtes HTTP, car rien n'est envoyé tant que vous n'appelez pas ob_end_flush().


• **Optimisation des Performances** :
La bufferisation peut améliorer les performances en permettant d'envoyer des données en une seule fois plutôt qu'en plusieurs petits morceaux, réduisant ainsi le nombre de requêtes HTTP.




• **Chargement Asynchrone** :
En utilisant des techniques comme l'envoi d'en-têtes ou de scripts avant que le corps principal ne soit envoyé, vous pouvez permettre aux navigateurs de commencer à charger des ressources externes pendant que le script s'exécute.




• **Facilité d'Implémentation** :
La mise en œuvre est simple grâce aux fonctions intégrées comme ob_start(), ce qui permet une intégration facile dans des projets existants.


### iv.  Exemple typique d’une bufférisassion

Nous allons mettre en place un programme un programme qui nus permet de voir le contenu des pages avec l’utilisation des contenus des variables différentes sur les différentes pages.




#### Les etapes a suivre
##### a. Creer un repertoire de travail
##### b. Creer trois fichiers


Mise en oeuvre 



##### a. Creer un repertoire de travail

On doit creer notre repertoire a la racine principale du projet dans le repertoire projet.

```bash
mkdir tp_bufferisation
```


import listed from '/img/listed.png';

<img src={listed} alt="Image Php" style={{width: 900}}/>
***figure: liste des repertoires***

Se placer dans le repertoire

```bash
cd tp_bufferisation

```

##### b. Creer trois fichiers

Le fichier BaseLayout.php es le fichier central ou on déclare nos différentes variables et qui apres vont prendre les valeurs suivant les informations du chaque site.


**1. Creation du 1er fichier base.php**

```bash
nano base.php
```

Et on met le contenu suivant:

```bash
<!DOCTYPE html>
<html>
<head>
    <title><?php echo $title ?></title>
</head>
<body>
    <?php echo $content ?>
</body>
</html>

```

**Explication du code**
Dans ce code nous avons fait appel à nos deux variables $title et $content qui seront utilisées dans les pages des sites en s’adaptant à leurs contenus quand on va inclure le fichier de base qui est base.php.


**2. Creation des deux autres fichiers** 
On crée maintenant les deux sites avec deux variables créées   title et content, inclure base.php et utilisation des deux fonctions suivantes:

- Ob_star () : démarrer   la bufferisation
- Ob_get_clean : Récupérer le contenu et le désactive
    
    



- **Creation du 2eme fichier site1.php**

```bash

nano  site1.php
```

avec du contenu suivant:

```bash
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

```


- **Creation du 3eme fichier site2.php**

```bash

nano site2
```

et on met le contenu suivant:


```bash

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
```



**Test sur le navigateur**

Apres la mise en place on peut test les deux pages.

1.  La page site1 avec 


```bash
http://localhost/projets/tp_bufferisation/site1.php
```

2.  La page site2 avec :


```nash
http://localhost/projets/tp_bufferisation/site2.php
```


import buf1 from '/img/buf1.png';

<img src={buf1} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi avec le site1***


import buf2 from '/img/buf2.png';

<img src={buf2} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi avec le site2***

**Nous avons remarque que la notion de bufferisation est importante dans le cadre de dynamisme d’un site.**







## c. Template et layout


### Objectif
Mettre en place un système avec Modèle MVC et avec Template dans le but de séparer les données et donner une bonne structure au programme.

**Les étapes à suivre :**

### 1.  Création du répertoire de travail php_mvc_pro_template

On doit creer notre repertoire de travail a la racine de des projets avec la commande:

```md title="root@Chirst-Ma:/var/www/html/projets#"
mkdir  php_mvc_pro_template
```

Se deplacer dans le repertoire

```bash
cd  php_mvc_pro_template

```


### 2.  Programme en un seul code des étudiants

Dans ce programme nous continuons toujours à utiliser la logique de la base de données « école » et la table « étudiants » traitée précédemment et l’objectif est de pouvoir mettre l’ensemble de tout notre programme dans un seul code et l’exécuter. Les étapes à suivre sont :

**a.  Créer un fichier « fichier_complet.php**

Ainsi on crée et édite notre fichier « fichier_complet.php » avec la commande « nano fichier_complet.php et on met son contenu de la connexion a la base de données jusqu’à l’affichage.

On cree notre fichier avec : 

```bash
nano fichier_complet.php
```

et on met le contenu suivant:

```bash

<?php
  define('dsn', 'mysql:host=localhost;dbname=ecole');
  define('user', 'mamadou');
  define('password', 'passer');
  try{
  $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e){
  printf("Echec connexion : %s\n", $e->getMessage());
  exit();
  }
  $sql="select * from etudiants";
  if(!$connexion->query($sql))
  echo "Probleme de connexion a la table etudiants";
  else
    {    

        echo $titre="<h2>La liste des noms et prenoms des etudiants</h2>";
        echo "<strong> NOM "."  "."PRENOM </strong>"."<br>";
        foreach ($connexion->query($sql) as $row){
        echo $row['nom']."  ".$row['prenom']."<br>";
        }
  }

?>

```



**b.  Tester le programme**

On va sur le navigateur et on met l’adresse 

```bash
http://localhost/projets/php_mvc_pro_template/fichier_complet.php
```

import aff from '/img/aff.png';

<img src={aff} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi***



Nous venons de tester notre page avec un code tout mélangé même si cela fonctionne trop bien il existe quelques défauts dans cette pratique comme :

- **Réutilisabilité du code très réduite**

Avec ce code ce n’est pas évident de le réutiliser du fait de son caractère a tout mélanger ensemble les différentes parties du code car cela engendra des confits  

- **Complexe à comprendre pour un débutant**

Pour un programmeur débutant le code lui sera complexe car il voit du SQL PHP html tous mélangés ainsi il ne pourra pas mieux gérer le code.
   Ainsi pour remédier à tous ces petits soucis que la notion d’implémentation de Template est importante car elle nous permettra de séparer le code en petites parties dans le but de séparer du code html par rapport au reste du code et le mettre dans un fichier a part.





### 3.  Programme CRUD avec prise en compte de Template et de layout

D’apres ce qui précède nous allons appliquer les notions de Template et de layout dans nos programmes suivants. 

 ### Qu’est-ce qu’un layout ? 

Un **layout** est essentiellement une structure de base pour les pages web, qui permet de maintenir une cohérence et une uniformité dans la présentation des différentes pages d’un site. Voici un guide détaillé avec des exemples concrets pour créer un layout en PHP. Layout d’une manière générale signifie mise en page. Elle fait référence à la disposition et à l’organisation des éléments sur une page web ou un document.



  #### Différence entre Template et layout en PHP

   #### Template

  **Définition :** Un Template est un fichier qui contient le code HTML et peut inclure des balises PHP pour afficher dynamiquement des données. Il est généralement utilisé pour définir la structure d'une page ou d'une section de page.

  **Fonctionnalité :**  Les templates sont souvent réutilisables et permettent d'afficher du contenu variable tout en maintenant une apparence cohérente. Par exemple, un Template peut contenir l'en-tête, le pied de page et des sections pour le contenu principal

  **Exemple :** Un fichier liste_etudiants.php qui définit comment afficher une liste d’étudiants avec son titre, son contenu …

   #### Layout

  **Définition :** Un layout est une configuration qui détermine la disposition des éléments sur une page. Il définit les régions où les templates peuvent être insérés, comme les barres latérales, les en-têtes, et les pieds de page.


  **Fonctionnalité :** Les layouts sont utilisés pour organiser la structure globale d'une page ou d'un site. Par exemple, un layout peut spécifier que la barre de navigation doit être en haut de la page et que le contenu principal doit être à gauche.

  **Exemple :**  Un fichier layout.php qui définit la structure générale de toutes les pages d'un site, incluant les zones pour différents templates.


  #### a. Programme simple réduction de code avec Template 

Notre programme précède dans lequel on a tout mis sera diviser en deux parties la première concerne la connexion à la base de données et récupérations des données et la dernière partie consiste à mettre un code html dans un Template que nous allons créer. 


**Les étapes à suivre** 


**1.  Créer un fichier « reduction_code.php »**
**2.  Créer un répertoire Template**
**3.  Créer le fichier liste_etudiants dans le répertoire Template**
**4.  Tester le programme**

Ainsi on passe à la réalisation du programme 



**1.  Créer un fichier « reduction_code.php »**
On execute la commande suivante:
```bash
 nano reduction_code.php 
```

et on met le code suivant comme il se doit


```bash
<?php
  define('dsn', 'mysql:host=localhost;dbname=ecole');
  define('user', 'mamadou');
  define('password', 'passer');
  try{
  $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e){
  printf("Echec connexion : %s\n", $e->getMessage());
  exit();
  }
  $sql="select * from etudiants";
  $stmt=$connexion->prepare($sql);
  $stmt->execute();
  $result=$stmt->fetchALL(PDO::FETCH_OBJ);
  if(!$connexion->prepare($sql))
       echo "Erreur de connexion a la table etudiants";
   else
   {
       foreach ($result as $row){
           $etudiants[]=$row;
       }
       require_once "templates/liste_etudiants.php";
   }

?>
```


**Explication du code :**


D’abord on a défini des constantes avec définie pour la connexion avec la base de données avec un système de retour d’erreur au cas d’échec (try et catch). Ensuite on a récupéré les éléments de notre tableau avec la requête SQL préparée pour question de sécurité des données. Enfin après une condition de bonne connexion on a récupéré les éléments de notre table étudiants sous forme de tableau et on l’a mis dans une variable étudiants. C’est après tout ce processus que nous faisons appel a notre Template qu’on va créer tout de suite pour qu’il affiche les données de notre tableau dans un fichier html qu’on va créer.   



**2.  Créer un répertoire Template**

On va maintenant  notre Template :

```bash   
mkdir templates
```

Se deplacer dans le Template

```bash
cd templates
```


**3.  Créer le fichier liste_etudiants dans le répertoire Template**

On peut maintenant creer le fichier

```bash
 nano liste_etudiants.php
```

**Explication du code :**

Ce code constitue notre Template car il n’y a que la partie de la présentation ici, il sera implémenté à la fin du fichier reduction_code.php grâce au require_once pour pouvoir afficher les données de notre table étudiants.



**4.  Tester le programme**

Maintenant on peut tester notre programme en appelant le fichier reduction_code.php


import awa from '/img/awa.png';

<img src={awa} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi***



  #### b. Programme en MVC avec prise en compte de Template de layout avec une action de lister les étudiants (READ)

Dans ce programme l’objectif est de mettre en place le modèle MVC avec un Template pour une bonne visibilité sachant que le Template e trouve à la partie vue donc est la partie vue du programme. Nous devons comprendre que pour chaque fonction dans un programme on a : 

**1e fonction = un modèle = un contrôleur=un template**

**Les étapes à suivre :**


1.  Création du modèle 

2.  Mise en place du Template

3.  Mise en place d’un contrôleur

4.  Test 

5.  Créer un layout et l’appliquer sur le programme 

  - Créer un fichier base_layout.php
  - Création d’un fichierTemplate pour appliquer le layout

6.  Test 


Ainsi nous passons à la pratique


**1.  Création du modèle**

Pour creer le modele on execute la commande suivante:

```bash
nano modele.php
```

et on met le contenu suivant:

```bash

<?php

  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }

``` 

**Explication du code:**

Dans ce code nous avons déclaré deux fonctions la première pour se connecter a base de données et la dernière pour récupérer les données afin que le Template les charge et les affiche. Et dans un programme en modèle MVC Template il est bon de ne pas fermer la base PHP finale \{ ?\>}  cela doit rester ouvert signifiant que le modèle actuel est un fichier intermédiaire complémentaire a un autre (Template). 



2.  Mise en place du Template

Dans le répertoire templates on crée notre fichier templates/liste_etudiants_layout.php

```md title="root@Chirst-Ma:/var/www/html/projets/php_mvc_pro_template# "
nano templates/liste_etudiants_layout.php

```

Et on ajoute le code suivant:

```bash
<html>
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
</th>

       <?php endforeach; ?>
</tr>
</tbody>
</body>
</html>

```

3.  **Mise en place d’un contrôleur**

Apres le modèle et le Template on va devoir créer un contrôleur pour pouvoir interagir entre nos différentes parties des codes précédents.
Dans le même répertoire de travail que le modèle on crée le contrôleur.


```md title="root@Chirst-Ma:/var/www/html/projets/php_mvc_pro_template#"
nano controleur_liste_etudiants.php
```

Et on met le contenu suivant: 

```bash
<?php
  
  require_once 'modele.php';
  $etudiants = lister_les_etudiants();
  require 'templates/liste_etudiants.php';
?>

```

**Explication du code :**

  Dans le code de ce contrôleur on a pu insérer tout d’abord le modèle a partir duquel on a récupéré la fonction qui affiche les étudiants pour la passer au Template pour l’affichage.     






4.  **Test**

Pour tester le programme on va aller sur un navigateur et faire appel au contrôleur

http://localhost/projets/php_mvc_pro_template/controleur_liste_etudiants.php


import ctt from '/img/ctt.png';

<img src={ctt} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi***




5.  **Création  d'un layout et l’appliquer sur le programme**



-  Créer un fichier base_layout.php

Comme on l’a dit le layout permet de mieux organiser le design d’un site d’une manière à dynamiser la page. Ici nous allons créer un fichier base_layout.php qui nous permettra d’adapter facilement et dynamiquement notre Template grâce aussi à la notion de bufferisation vue précédemment.


Dans notre Template on crée le fichier c’est évident le layout c’est du fichier html.

```md title="root@Chirst-Ma:/var/www/html/projets/php_mvc_pro_template#"
 nano templates/base_layout.php 
```

et on met le contenu suivant: 

```bash

<html>
<head>
    <title><?php echo $title ?></title>
</head>
<body>
    <?php echo $content ?>
</body>
</html>

```
**Explication du code :**

Dans notre code ici nous avons juste fait appel a deux variables $title et $content, ces deux variables seront créées dans notre Template /templates/liste_etudiants.php  la deuxième sera surtout récupérée grâce à la bufferisation.




-  Création d’un fichierTemplate pour appliquer le layout

Apres la création du layout on crée notre Template pour l’adaptation et l’utiliser bien-sûr la bufferisation.

On cree le template 

```bash
nano templates/liste_etudiants_layout.php
```

et on met le contenu suivant:

```bash
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

```

Comme on vient de créer un nouveau Template il faut qu’on prenne cela en compte dans le contrôleur.

on edite le controleur

```bash
nano controleur_liste_etudiants.php

```
et on met le contenu suivant

```bash
<?php
  require_once 'modele.php';
  $etudiants = lister_les_etudiants();
  require 'templates/liste_etudiants_layout.php';
?>

```


:::warning
On a juste change le nom du Template c’est à dire liste_etudiants.php en liste_etudiants_layout.php
:::



6.  **Test** 

Pour le test on appelle juste notre contrôleur dans le navigateur 

```bash
http://localhost/projets/php_mvc_pro_template/controleur_liste_etudiants.php
```

import lt from '/img/lt.png';

<img src={lt} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi***




  #### c. Programme en MVC avec prise en compte de Template avec l’action de voir les détails d’un étudiant


Nous allons ajouter une autre fonction à notre programme celle de donner les détails sur un étudiant grâce à son id récupéré. Et comme la logique nous le dit,

1e fonction = un modèle = un contrôleur =Template ce qui nous amène à suivre les étapes suivantes : 

1.  Créer un modèle (ajouter notre fonction au modèle)
2.  Créer un fichier Template 
3.  Créer un contrôleur
4.  Test


Ainsi on passe à la pratique 

**1.  Créer un modèle (ajouter notre fonction au modèle)**

On cree notre fonction d'ajout

```bash
nano modele.php
```

la fonction a ajouter est:

```bash
function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();

  }

```


**Explication du code :**

Nous avons ajoute une fonction a notre modèle avec une requête préparée de sélectionner toutes les informations d’un étudiant par rapport à son id.

Le code final de modele.php donne: 

```bash
  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }
  function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();

  }

```




**2.  Créer un fichier Template**

On crée maintenant notre Template sur les détails d’un étudiant


```bash

nano templates/details_etudiant_layout.php
```

et on met le contenu

```bash


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

```


**Explication du code :**

C’est notre Template pour détails d’un étudiant au début on a mis une condition sur la variable person(elle sera créée dans le contrôleur des détails de l’étudiant) qui récupère les données de l’étudiant que s’il récupère aucune donnée c’est-à-dire que l’ID n’existe pas(les données vides) on affiche le message de non reconnaissance de l’ID au cas contraire on affiche les informations de  l’étudiant grâce a son ID et on les affiche dans un le navigateur.





**3.  Créer un contrôleur**

3.  Créer un contrôleur

On cree notre controleur.
```bash
nano controleur_details_etudiant.php
```

et on met le contenu suivant:

```bash
<?php
  require_once 'modele.php';
  $person = details_etudiant_par_id($_GET['id']);
  require 'templates/details_etudiant_layout.php';
?>
```


**Explication du code :**

Ceci est le contrôleur sur les détails des étudiants qui connecte d’abord a la base de données dans le modèle ensuite récupère  les informations de l’étudiant par l’ID dans la requête  dans la fonction details_etudiant_par_id de l’étudiant dans une variable appelée person pour les  passer au Template qui les affiche.                              





**4.  Test**


Pour test le programme sur les details d’un etudiant par rapport a son ID nous devons dans notre navigateur appeler le contrôleur détails (controleur_details_etudiant.php) avec un paramètre id

:::info
**Il est important de  comprendre le fonctionnement des verbes du service Web comme GET,PUT,POST,PATCH,DELETE pour savoir dans quel cas utiliser tel verbe. Par exemple dans notre cas on va utiliser le verbe GET**.
:::



On va chercher les informations sur l'etudiant qui a ID=1

```bash
http://localhost/projets/php_mvc_pro_template/controleur_details_etudiant.php?id=1 
```

import ex from '/img/ex.png';

<img src={ex} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi***

- **Quand l’ID n’existe pas**

On liste d'abord le tableau.

```bash
http://localhost/projets/php_mvc_pro_template/controleur_liste_etudiants.php
```

import ltt from '/img/lt.png';

<img src={ltt} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***



on voit que l'etudiant avec un ID=8 n'existe pas donc on essaie.


```bash
http://localhost/projets/php_mvc_pro_template/controleur_details_etudiant.php?id=8
```

le resultat donne

import no from '/img/no.png';

<img src={no} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi l'id n'existe pas***

Comme on l'a dit dans notre template que si les variables des parametres $prenom et $nom ne contiennent aucune valeur ce message s'affiche.



  #### d. Programme en MVC avec prise en compte de Template avec l’action d’insérer les étudiants (CREATE)


Dans ce programme on va devoir mettre au point une action d’insertion des étudiants dans notre base de données.


**Les étapes à suivre :**


**1.  Créer un modèle (ajouter notre fonction au modèle)**
**2.  Créer un fichier Template**
**3.  Créer le contrôleur**
**4.  Test**



On passe a la pratique

**1.  Création du modèle (ajout de la fonction d’insertion)**


Nous allons créer notre fonction d’insertion et apres l’ajouter au modèle général modele.php

```bash


function inserer_etudiant($prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="insert into etudiants (prenom,nom,classe,note) values (:prenom, :nom, :classe, :note)";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
  }

```
**Explication du code :**

Nous venons de créer une fonction d’insertion « inserer_etudiant » et elle prend en paramètres les différentes valeurs(prénom, nom, classe, note) que l’utilisateur lui passera  qu’elle va insérer dans la table étudiants avec une requête préparée. 
Ce qui donne le modele final suivant :

```bash
nano modele.php

```


```bash


<?php

  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }
  function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();
  
  }
  
  function inserer_etudiant($prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="insert into etudiants (prenom,nom,classe,note) values (:prenom, :nom, :classe, :note)";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
  
  }

```


**2.  Créer un fichier Template**

Maintenant on va créer notre Template
```bash
nano templates/ insertion_etudiant_layout.php

```

et on met le contenu suivant:


```bash

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
          echo ' Insertion reussi de  '.$prenom."  ".$nom." "."en classe de ".$classe." "."avec une note de ".$note."<br>";
            $content = ob_get_clean();
          include 'base_layout.php';

  }       

}else{
   echo "Veuillez renseigner toutes les informations de l'étudiant";

  
}
?>
```



**Explication du code :**


Ici sur notre page Template on a mis au début une condition pour vérifier que le programme a  recu les valeurs des paramètres et ensuite de laisser un message suite a ses paramètres au cas contraire l’utilisateur doit remplir tous les champs. 



**3.  Créer un contrôleur**


On crée maintenant notre contrôleur pour l’insertion des étudiants.

```bash
nano controleur_insertion_etudiant.php
```

et on met le contenu suivant

```bash
<?php

require_once 'modele.php';

$prenom = $_GET['prenom'] ;
$nom = $_GET['nom'] ;
$classe = $_GET['classe'] ;
$note = $_GET['note'] ;
require 'templates/insertion_etudiant_layout.php';
?>
```


**Explication du code :**


Nous venons de mettre en place apres le modèle et le Template   notre contrôleur dans lequel il récupère les différentes variables de l’insertion.




**4.  Test**



Maintenant on peut passer au test d’insertion qui consiste a mettre l’url dans le navigateur suivi de « ? »  les paramètres et leurs valeurs. 

Cette figure suivante montre comment mettre les differents parametres pour l'insertion dans le navigateur.



import para from '/img/para.png';

<img src={para} alt="Image Php" style={{width: 900}}/>
***Figure: systeme d'insertion***




-  On liste les étudiants



```bash
http://localhost/projets/php_mvc_pro_template/controleur_liste_etudiants.php
```

import ht from '/img/ht.png';

<img src={ht} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***


-  On passe à l’insertion de l’étudiant suivant :

 **Prenom : Jamal**

 **Nom : Moussa**

 **Classe : Master**

 **Note : 15**

on met les informations 

```bash
http://localhost/projets/php_mvc_pro_template/controleur_insertion_etudiant.php?prenom=Jamal&nom=MOUSSA&classe=master&note=15
```


import ha from '/img/ha.png';

<img src={ha} alt="Image Php" style={{width: 900}}/>
***Figure: insertion de l'etudiant***


- On reverifie la liste 


import para1 from '/img/para1.png';

<img src={para1} alt="Image Php" style={{width: 900}}/>
***Figure: affichage de l'etudiant  dans la base de donnees***



-  Verifions avec un parametre manquant « note »

```bash
http://localhost/projets/php_mvc_pro_template/controleur_insertion_etudiant.php?prenom=Jamal&nom=MOUSSA&classe=master

```



import mes from '/img/mes.png';

<img src={mes} alt="Image Php" style={{width: 900}}/>
***Figure: message d'erreurs***





  #### e. Programme en MVC avec prise en compte de Template avec l’action de modifier les informations d’un étudiant (UPDATE)



Dans ce programme on va mettre à jour les informations d’un étudiant par rapport à son id.


Les étapes à suivre :


1.  Créer un modèle « ajout de la fonction modifier_un étudiant »
2.  Créer un Template
3.  Créer un controleur
4.  Tester le programme 


**1.  On crée notre modèle pour la mise à jour des informations**


La  fonction de notre modele est :

```bash


La  fonction de notre modele est :
function modifier_etudiant($id, $prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="update  etudiants set prenom = :prenom,nom =:nom, classe=:classe, note =:note where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();    
  }

```

**Explication du code:**


Nous venons de créer une nouvelle fonction pour la mise a jour des informations des étudiant par rapport à l’ID récupéré dans une requête préparée ce qui veut dire que l’on peut modifier ses informations que si cet ID existe. 

Et le code final du modele.php donne 

```bash

<?php

  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }
  function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();
  
  }
  
  function inserer_etudiant($prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="insert into etudiants (prenom,nom,classe,note) values (:prenom, :nom, :classe, :note)";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
       

  }
  function modifier_etudiant($id, $prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="update  etudiants set prenom = :prenom,nom =:nom, classe=:classe, note =:note where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
    
  }


```



**2.  Création du Template**

On peut maintenant créer notre Template pour la mise à jour

```bash
nano templates/modification_etudiant_layout.php

```

et on met le code suivant

```bash

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

```


**Explication du code :**


Dans ce code nous avons verifier l’existance les valeurs des parametres afin de pouvoir ecrire un message de mise à jour au cas contraire on dit que l’etudiant n’existe pas.



**3.  Création du contrôleur**


On peut maintenant créer notre contrôleur


```bash
nano controleur_modifier_etudiant.php
```

et on met le code

```bash

<?php

require_once 'modele.php';

$id = $_GET['id'];
$prenom = $_GET['prenom'];
$nom = $_GET['nom'] ;
$classe = $_GET['classe'] ;
$note = $_GET['note'] ;
require 'templates/modification_etudiant_layout.php';
?> 


```







**Explication du code :**


Dans le code on a récupéré les différentes variables pour les différents paramètres afin de les passer au Template




**4.  Test du programme**


On test maintenant le programme en donnant le bon ID sur le navigateur


- On liste les etudiants

import para11 from '/img/para1.png';

<img src={para11} alt="Image Php" style={{width: 900}}/>
***Figure: affichage des etudiants***



Comme on va modifier les informations par ID des étudiants, on modifie le code source du template lecture des étudiants pour ressortir les ID donc on ajoute juste au-dessus de prénom l’ID comme suit :

```bash

nano templates/liste_etudiants_layout
```




```bash
<?php

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
```


On relance

http://localhost/projets/php_mvc_pro_template/controleur_liste_etudiants.php



import ja from '/img/ja.png';

<img src={ja} alt="Image Php" style={{width: 900}}/>
***Figure: Liste des etudiants***



- On va modifier l’etudiant avec ID=22 on change son prenom = «Falilou » et son nom =  « SALL »

```bash
localhost/projets/php_mvc_pro_template/controleur_modifier_etudiant.php?id=22&prenom=Falilou&nom=SALL&classe=master&note=15
```

Et on regarde le resultat


import jaaa from '/img/jaaa.png';

<img src={jaaa} alt="Image Php" style={{width: 900}}/>
***Figure: Modification reussie***


On liste a nouveau 



import jaaaa from '/img/jaaaa.png';

<img src={jaaaa} alt="Image Php" style={{width: 900}}/>
***Figure: Modifications prises en compte***





-  Avec un paramètre manquant cela donne


import jj from '/img/jj.png';

<img src={jj} alt="Image Php" style={{width: 900}}/>
***Figure: cela ne marche pas***


les modifications ne vont pas marcher car on a defini une condition d'accepter de recuperer toutes les valeurs des variables avant de lancer l'operation.







  #### f. Programme en MVC avec prise en compte de Template avec l’action de supprimer un étudiant (DELETE)

Dans ce programme on va effectuer une action de supprimer un étudiant par son id 



Les étapes à suivre:


1.  Créer un modèle « ajout de la fonction modifier_un étudiant »
2.  Créer un Template
3.  Créer un controleur
4.  Tester le programme 



On passe a la pratique 



**1.  Créer un modèle « ajout de la fonction supprimer un étudiant »**


On cree une nouvelle fonction pour la suppression des etudiants

```bash

  function supprimer_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select count(*) from etudiants where id = :id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();

      if($stmt->fetchColumn() > 0){
        //$connexion=connect_db();
        $sql1="delete from etudiants where id=:id";
        $stmt1=$connexion->prepare($sql1);
        $stmt1->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt1->execute();
        return $stmt1;


      }else{
        return null;
      }
     
  }


```


**Explication du code :**


Nous avons créé une fonction de supprimer un étudiant et dans cette fonction on a mis deux requêtes préparées avec une condition la première pour vérifier si l’id de l’étudiant existe et la dernière pour supprimer à partir de cet ID. Ce qui veut dire si l’ID n’existe pas on ne peut rien supprimer et cela retourne une erreur.

Et le modele.php donne maintenant:


```bash
<?php

  function connect_db()
  {
      define('dsn', 'mysql:host=localhost;dbname=ecole');
      define('user', 'mamadou');
      define('password', 'passer');
  try
  {
      $connexion=new PDO(dsn,user,password);
  }
  catch(PDOException $e)
  {
  printf("Echec connexion : %s\n",
  $e->getMessage());
  exit();
  }
  return $connexion;
  }

  function lister_les_etudiants()
  {
      $connexion=connect_db();
      $amis=Array();
      $sql="select * from etudiants";
      $stmt=$connexion->prepare($sql);
      $stmt->execute();
      $result=$stmt->fetchALL(PDO::FETCH_OBJ);
      foreach ($result  as $row)
      {
          $etudiants[]=$row;
      }

      return $etudiants;
  }
  function details_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select  * from etudiants where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();
  
  }
  
  function inserer_etudiant($prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="insert into etudiants (prenom,nom,classe,note) values (:prenom, :nom, :classe, :note)";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
  }
  function modifier_etudiant($id, $prenom, $nom, $classe, $note)
  {
      $connexion=connect_db();
      $sql="update  etudiants set prenom = :prenom,nom =:nom, classe=:classe, note =:note where id=:id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->bindParam(':prenom', $prenom);
      $stmt->bindParam(':nom', $nom);
      $stmt->bindParam(':classe', $classe);
      $stmt->bindParam(':note', $note);
      return $stmt->execute();
    
  }
  function supprimer_etudiant_par_id($id)
  {
      $connexion=connect_db();
      $sql="select count(*) from etudiants where id = :id";
      $stmt=$connexion->prepare($sql);
      $stmt->bindParam(':id', $id, PDO::PARAM_INT);
      $stmt->execute();

      if($stmt->fetchColumn() > 0){
        //$connexion=connect_db();
        $sql1="delete from etudiants where id=:id";
        $stmt1=$connexion->prepare($sql1);
        $stmt1->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt1->execute();
        return $stmt1;


      }else{
        return null;
      }
     
  }
```



**2.  Créer un Template**


On crée maintenant notre Template

```bash
nano template/supprimer_etudiant_layout.php

```

et le contenu

```bash

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

```


**Explication du code :**


Dans ce code on a juste vérifié si l’id existe ainsi on supprime l’étudiant avec un message de réussite a l’appui au cas contraire un message d’erreur s’affiche.




**3.  Créer un contrôleur**


Maintenant on crée le contrôleur pour la suppression

```bash
nano controleur_supprimer_etudiant.php

```

et le contenu

```bash
<?php
  require_once 'modele.php';
  $id=$_GET['id'];
  require 'templates/supprimer_etudiant_layout.php';
?>
```



**Explication du code :**


On a récupéré l’ID pour la suppression afin de le passer au Template 


**4.  Tester le programme**


On peut maintenant test le programme en passant le paramètre ID dans le navigateur


-  On liste les étudiants 


import jv from '/img/jaaaa.png';

<img src={jv} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***



-  On supprime l’étudiant avec l’ID 15


```bash
http://localhost/projets/php_mvc_pro_template/controleur_supprimer_etudiant.php?id=15
```



import sup from '/img/sup.png';

<img src={sup} alt="Image Php" style={{width: 900}}/>
***Figure: Message de reussite***



On verifie la liste


import la from '/img/la.png';

<img src={la} alt="Image Php" style={{width: 900}}/>
***Figure: Suppression reussie***



-  Avec un id inexistant  « id=44 »


```bash
http://localhost/projets/php_mvc_pro_template/controleur_supprimer_etudiant.php?id=44 

```


Ce qui donne



import er from '/img/er.png';

<img src={er} alt="Image Php" style={{width: 900}}/>
***Figure: Erreur de suppression***


On  ne peut pas avoir de resultat ici car cet ID n'existe pas.





  #### g.  Problématique dans l’utilisations de plusieurs fonctions



Nous venons de mettre au point des actions CRUD, lister, insérer, modifier et supprimer des données des étudiants. Le système avec lequel on a procédé est arbitraire statique et long ainsi de cette manière la gestion de tout cet ensemble peut causer ces soucis. 


- Retourner une erreur quand on ne lui passe pas le paramètre ID pour l’action détails
- Difficile de gérer les deux actions en même temps dynamiquement
-  Etant dans un même modèle de fonctions mais utilisant deux contrôleurs séparément difficiles de gérer les contrôleurs pour une bonne cohésion.

C’est l’ensemble de ces points qui nous amène à voir la notion d’utiliser un routeur pour la gestion des contrôleurs intégré dans un contrôleur central appelé contrôleur frontal.  


