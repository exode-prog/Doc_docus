---
sidebar_position: 5
---

# D. LE ROUTING SUR LE MODELE EN MVC





### Introduction a la notion de routing


Au sein d’une architecture MVC, le routeur joue un rôle central en gérant la navigation entre les différentes parties de l'application on l’appelle contrôleur central ou contrôleur frontal. Dans un programme qui intègre plusieurs fonctionnalités l’utilisateur d’un routeur est très importante car il permet de gérer d’indiquer le bon contrôleur à prendre selon les besoins.

import rt from '/img/rt.png';

<img src={rt} alt="Image Php" style={{width: 900}}/>
***Figure: routing***


### Importance du Routeur

-	**Gestion des Requêtes**

      Le routeur reçoit toutes les requêtes HTTP et détermine quel contrôleur et quelle méthode doivent être appelés en fonction de l'URL demandée. Cela permet de diriger le flux des requêtes vers les bonnes parties de l'application, assurant ainsi une organisation claire du code.


-	**Séparation des Préoccupations**
	En centralisant la gestion des routes, le routeur permet aux développeurs de maintenir la séparation des préoccupations, un principe fondamental du MVC. Chaque composant (modèle, vue, contrôleur) peut se concentrer sur sa propre logique sans se soucier de la manière dont les requêtes sont dirigées.

-	**Facilité d'Extension**


          L'utilisation d'un routeur facilite l'ajout de nouvelles fonctionnalités. Les développeurs peuvent simplement ajouter de nouvelles routes sans avoir à modifier le code existant. Cela rend l'application plus modulaire et adaptable à l'évolution des besoins



-	**Clarté et Lisibilité**

       En définissant clairement les routes dans un fichier centralisé, le code devient plus lisible et compréhensible pour d'autres développeurs. Cela aide également à la maintenance et à la collaboration entre équipes.


-	**Sécurisation du Code**

       Le routeur peut implémenter des mécanismes de sécurité, comme des listes blanches pour autoriser uniquement certaines routes, ce qui contribue à protéger l'application contre les accès non autorisés.



Ainsi on va mettre en place notre routeur en créant un contrôleur central « controllers.php » dans lequel on va mettre tous nos contrôleurs et créer un fichier index.php qui va se lancer d’abord pendant le programme et il va définir les différentes routes. 


### Les étapes à suivre 

1.	Création du fichier contrôleurs.php

2.	Création du fichier index.php 

3. Test 

### Mise en pratique



**1.	Création du fichier contrôleurs.php**

A la base de notre projet au même niveau que les contrôleurs on crée le contrôleur routeur.

```md title="root@Chirst-Ma:/var/www/html/projets/php_mvc_pro_template#"

nano controllers.php

```


et on met le contenu suivant:


```bash

<?php
//liste de nos controleurs
  function lecture_action()
  {
    $etudiants = lister_les_etudiants();
    require 'templates/liste_etudiants_layout.php';

  }


  function detail_action($id)
  {
   $person = details_etudiant_par_id($_GET['id']);
   require 'templates/details_etudiant_layout.php';
  }


  function insertion_action($prenom,$nom,$classe,$note)
  {
   $prenom = $_GET['prenom'] ;
   $nom = $_GET['nom'] ;
   $classe = $_GET['classe'] ;
   $note = $_GET['note'] ;
   require 'templates/insertion_etudiant_layout.php';

   
  }

  function modification_action($id,$prenom,$nom,$classe,$note)
  {
   $id = $_GET['id'];
   $prenom = $_GET['prenom'];
   $nom = $_GET['nom'] ;
   $classe = $_GET['classe'] ;
   $note = $_GET['note'] ;
   require 'templates/modification_etudiant_layout.php';
  }

  function suppression_action($id)
  {
   $id=$_GET['id'];
   require 'templates/supprimer_etudiant_layout.php';
  }
?>


```

**Explication du code :**



Nous avons regroupé tous nos contrôleurs dans des fonctions  dans ce contrôleur central notre routeur avec leurs différents paramètres  






**2.	Création du fichier index.php**


Maintenant on crée notre fichier index.php dans lequel nous allons rediriger nos différentes routes. 

```bash
nano index.php

```
et on met le contenu 

```bash

<?php
  // index.php
  // On charge les modeles et les controleurs
  require_once 'modele.php';
  require_once 'controllers.php';
  // gestion des routes
  $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

  if ('/projets/php_mvc_pro_template/index.php' == $uri)
    {
        lecture_action();
    }

  
  elseif ('/projets/php_mvc_pro_template/index.php/detail' == $uri && isset($_GET['id']))
    {
        detail_action($_GET['id']);
    }

  elseif ('/projets/php_mvc_pro_template/index.php/insert' == $uri &&  isset($_GET['prenom']) && isset($_GET['nom']) && isset($_GET['classe']) && isset($_GET['note']))
    {
        insertion_action($_GET['prenom'], $_GET['nom'],$_GET['classe'],$_GET['note']);
    }

  elseif ('/projets/php_mvc_pro_template/index.php/update' == $uri && isset($_GET['id']) && isset($_GET['prenom']) && isset($_GET['nom']) && isset($_GET['classe']) && isset($_GET['note']))
    {
        modification_action($_GET['id'],$_GET['prenom'], $_GET['nom'],$_GET['classe'],$_GET['note']);
    }

  elseif ('/projets/php_mvc_pro_template/index.php/supprimer' == $uri && isset($_GET['id']))
    {
        suppression_action($_GET['id']);
    }
  else
    {
        header('Status: 404 Not Found');
        echo '<html><body><h1>Page Not Found</h1></body></html>';
    }
  ?>
```

**Explication du code :** 


Nous avons dans ce fichier fait appel d’abord à notre modèle général et le contrôleur frontal ensuite déclaré une variable globale qui retourne le répertoire personnel de travail ou les fichiers de contrôle et le modèle se trouvent. Enfin on a redirigé nos différentes routes selon les mots clés donnés qui exécutent une fonction spécifique mais on a mis l’action de lecture des étudiants par défaut par rapport aux autres actions.

- $uri : retourne une variable d'environnement global qui designe le repertoire du document root et dans notre cas ici c'est "/projets/php_mvc_pro_template" et comme on a mis l'action de lister les etudiants avec l'appel de notre index.php quand l'utilisateur execute $uri+index.php on le redirige sur la liste des etudiants. 


**3. Test de bon fonctionnement**

- les differentes routes nous donnent: 



**1.  Lister les etudiants**



  Pour lister les étudiants, action par défaut on met l’url suivante


  ```bash

  http://localhost/projets/php_mvc_pro_template/index.php
  ```


import lb from '/img/lb.png';

<img src={lb} alt="Image Php" style={{width: 900}}/>
***Figure: Liste des etudiants***


**2. Pour voir les détails sur un étudiant**

On voit pour l'etudiant avec ID=1.


```bash

http://localhost/projets/php_mvc_pro_template/index.php/detail?id=1
```

import dt from '/img/dt.png';

<img src={dt} alt="Image Php" style={{width: 900}}/>
***Figure: Affichage des details sur l'etudiant***




**3. Pour modifier un étudiant**

On va modifier les information de l'etudiant avec ID=23


```bash

localhost/projets/php_mvc_pro_template/index.php/update?id=23&prenom=Exodia&nom=Ngam&classe=licence1&note=14
```

import mod from '/img/mod.png';

<img src={mod} alt="Image Php" style={{width: 900}}/>
***Figure: Modifications reussies***



- on liste le tableau 

import tab1 from '/img/tab1.png';

<img src={tab1} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***



**4 	Pour insérer un étudiant**

On va inserer l'etudiant avec les informations suivantes:

Prenom=Soulemane

Nom=Mbaye

classe=licence2

note=17

```bash

localhost/projets/php_mvc_pro_template/index.php/insert?prenom=Soulemane&nom=Mbaye&classe=licence2&note=17
```


import ss from '/img/ss.png';

<img src={ss} alt="Image Php" style={{width: 900}}/>
***Figure: Enregistrement reussi***

- on liste le tableau



```bash
http://localhost/projets/php_mvc_pro_template/index.php
```

import sou from '/img/sou.png';

<img src={sou} alt="Image Php" style={{width: 900}}/>
***Figure: Enregistrement reussi***


**5 Supprimer un etudiant** 

On va supprimer l'etudiant avec ID=13


```bash

http://localhost/projets/php_mvc_pro_template/index.php/supprimer?id=13
```

import sp from '/img/sp.png';

<img src={sp} alt="Image Php" style={{width: 900}}/>
***Figure: Suppression reussie***


- On liste le tableau

import etb from '/img/etb.png';

<img src={etb} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***


