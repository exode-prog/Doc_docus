---
sidebar_position: 2
---

# A. LE MODELE MVC EN PHP


## a.  Présentation de PHP  et de MVC ##

import logo from '/img/logo.jpg';

<img src={logo} alt="Image Php" style={{width: 400}}/>

PHP, qui signifie **"PHP: Hypertext Preprocessor"**, est un langage de programmation libre principalement utilisé pour le développement web. Ci-dessous on a PHP avec   ses caractéristiques, son fonctionnement.

#### Qu'est-ce que PHP ? ####
PHP est un langage de script côté serveur, ce qui signifie que le code PHP est exécuté sur le serveur avant d'être envoyé au navigateur de l'utilisateur. Cela permet de générer dynamiquement des pages web en fonction des interactions des utilisateurs ou des données stockées dans des bases de données.

#### Caractéristiques de PHP #### 
  -  Open Source : PHP est gratuit et peut être utilisé et modifié librement
  - Interprété : Contrairement à un langage compilé, PHP est interprété à la volée par le serveur.
  - Typage Dynamique : Vous n'avez pas besoin de déclarer le type des variables ; PHP détermine automatiquement le type en fonction de la valeur assignée.
  - Orienté Objet : PHP supporte la programmation orientée objet, ce qui permet de créer des applications modulaires et réutilisables.

#### Fonctionnement de PHP ####
  Lorsqu'un utilisateur accède à une page web contenant du code PHP :
  - Le serveur interprète le code PHP et exécute les instructions qu'il contient.
  - Le résultat (généralement du HTML) est envoyé au navigateur.
  - L'utilisateur ne voit jamais le code PHP lui-même, seulement le résultat final


  ###    i.  Présentation du modèle MVC en PHP ###

import arch from '/img/arch.jpg';

<img src={arch} alt="Image Php" style={{width: 900}}/>
***Figure: architecture de MVC***

La structure **MVC (Model View Controller)** est une architecture qui a pour principe de permettre la séparation des données des méthodes qui les utilisent. Dans la théorie cette méthode peut permettre à un développeur frontend et backend de collaborer en même temps sur une même application.


  ### ii. Fonctionnement de MVC ###

  L’objectif de l’architecture MVC est de pouvoir mettre en place un travail en chaine. L’idée est de pouvoir séparer le code en différents fichiers dont chacun aura une responsabilité définie Pour tout débutant le plus souvent les codes sont mis dans un même fichier et ce qui ne favorise pas une bonne sécurité, une bonne gestion et une bonne maintenance des codes ainsi grâce au modèle MVC on rend   les codes plus lisibles, plus maintenables et plus prévisibles. Ainsi l’ancienne manière de pouvoir mettre tout le code dans un même fichier est oubliée.

  ### iii. Les entités d’architecture de MVC : Model, View, Controller ###

1. **Le modèle (Model)** 
  
  Le modele contient les données manipulées par le programme. Il assure la gestion de ces données et garantit leur intégrité. Dans le cas typique d'une base de données, c'est le modèle qui la contient. Le modèle offre des méthodes pour mettre à jour ces données (insertion suppression, changement de valeur). Il offre aussi des méthodes pour récupérer ses données. Dans le cas de données importantes, le modèle peut autoriser plusieurs vues partielles des données.

2. **La vue(View)**

  La vue fait l'interface avec l'utilisateur. Sa première tâche est d'afficher les données qu'elle a récupérées auprès du modèle. Sa seconde tâche est de recevoir toutes les actions de l'utilisateur (clic de souris, sélection d’une entrée, boutons, …). Ses différents événements sont envoyés au contrôleur Les views, qui sont les seuls fichiers contenant de l’affichage (HTML) et du code dynamique structurel (des conditions ou des boucles pour l’affichage).

3. **Le controleur(Controller)**

  Le contrôleur est chargé de la synchronisation du modèle et de la vue. Il reçoit tous les événements de l'utilisateur et enclenche les actions à effectuer. Si une action nécessite un changement des données, le contrôleur demande la modification des données au modèle et ensuite avertit la vue que les données ont changé pour que celle-ci se mette à jour. Certains événements de l'utilisateur ne concernent pas les données mais la vue. Dans ce cas, le contrôleur demande à la vue de se modifier. Les controllers. 



import mvc from '/img/mvc.png';

<img src={mvc} alt="Image Php" style={{width: 900}}/>
***Figure: interactions entre les entites***

**Explication d’échanges sur l’architecture de MVC**


1.  L’utilisateur sur son bureau de travail fait une demande (REQUEST) au contrôleur (controller)
2.  Le contrôleur à son tour fait une demande au modèle(model)
3.  Le modèle a son tour retourne les données demandées au contrôleur 
4.  Le contrôleur soumet les données à la vue (view) 
5.  La vue montre maintenant la présentation du fichier demandé 
6.  La présentation retourne comme une réponse (RESPONSE) au contrôleur ainsi l’utilisateur a accès à ce qu’il a demandé dans son navigateur.

### iv. Importance d’utilisation de MVC ###

- #### Connaitre l’architecture MVC permet de comprendre le fonctionnement des Framework PHP. ####
En effet, ces derniers sont tous basés sur la logique MVC, ce qui permet une maintenabilité du code plus performante.
- #### Separation du code. ####
Les URL sont déclarées (par exemple : une route en GET pour voir les formulaires, une route en POST pour le traiter). Chaque table de la base de données à son propre controller (qui définira via des fonctions les données à transmettre à l’URL pour l’afficher ensuite) ainsi que son propre Model (qui permet de traiter et récupérer les données de la base de données). Enfin, les vues sont gérées par table de la base de données, et par type d’affichage. Ce sont donc des morceaux de fichiers appelés par le Controller au moment de l’affichage.
- #### Permettre  de bien compartimenter la façon de fonctionner pour gérer un site en PHP. #### 
L’utilisation d’un Framework va permettre d’aller encore plus loin, tout en rendant la création d’un site plus rapide ! C’est ce que nous allons voir par la suite.



### v. Mise en oeuvre ### 


#### Les outils necessaires ####

**Un ordinateur avec :**
1. Un système d’exploitation (Linux Ubuntu)
2. Un serveur Web (Apache2)
3. Une version PHP installée (préférence version récente php8 ou php7)
4. Un éditeur de textes (nano, sublime Text …)
5. Un SGBD (MYSQL)
6. Un navigateur 


## b.  Methode en PHP procédurale sans MVC ##

Dans ce projet nous allons mettre en place un programme écrit en PHP pour nous afficher la liste d’étudiants dans une base de données d’une école.

### i. Objectif du programme ###

L’objectif du programme du code est de pouvoir afficher la liste des étudiants qui se trouvent dans la base de données « école ».


### ii. Les etapes a suivre ###

1. **Installation et vérification des serveurs nécessaires au projet et du langage PHP :**
2. **Création du répertoire de travail dans le document ROOT du serveur Apache2**
3. **Création d’une base de données dans MySQL au nom de « école » avec une tables « étudiants » et les champs « prénom, nom, classe, note »**
4. **Création de notre fichier de code**
5. **Test du programme** 


**Mise en pratique**

1. **Installation et vérification des serveurs nécessaires au projet et du langage PHP :**

Avant tout on procède aux installations des serveurs Apache2 et MySQL. Certains verseurs sont déjà installés dans notre cas mais si ce n’est pas encore fait il faut exécuter les commandes suivantes : 
- **APACHE**

Le serveur Apache2 open-source nous aidera pour ce projet.et ensuite installer le langage de script PHP.

:::warning
 On réalise tout ce projet en étant super utilisateur ROOT, on n’a pas besoin de précéder les commandes avec sudo 
:::

```bash
apt install apache2
apt policy apache2
```

import apache from '/img/apache.png';

<img src={apache} alt="Image Php" style={{width: 900}}/>
***Figure: installation et vérification du serveur Apache2***

- **MYSQL**

MySQL est le SGBD (système de gestion de base de données) open-source que nous utilisons dans ce projet. Pour l’installer et vérifier son installation on exécute les commandes suivantes :

```bash
 apt install mysql-server
 apt policy mysql-server
```

import mysql from '/img/apache.png';

<img src={apache} alt="Image Php" style={{width: 900}}/>
***Figure: installation et vérification de MySQL***

- **PHP**

PHP (officiellement, ce sigle est un acronyme récursif pour PHP Hypertext Preprocessor) est un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d'applications web. Il fait partie des langages backend de la programmation.
On doit installer les paquets suivants :
- **Php8.3** est un meta package utilisée pour exécuter des applications PHP.
- **Php8.3-fpm** fournit l’interprète Fast Process Manager qui fonctionne comme démon et reçoit des requêtes Fast/CGI.
- **Php8.3-mysql** connecte PHP à la base de données MySQL.
- **libapahce2-mod-php8.3** fournit le module PHP pour le serveur Apache.
- **libapache2-mod-fcgid** contient un mod_fcgid qui lance un certain nombre d’instances de programme CGI pour traiter les requêtes simultanées.

```bash
apt-get install  php8.3 php8.3-fpm php8-3-mysql libapache2-mod-php8.3 libapache2-mod-fcgid -y
```

import phpi from '/img/phpi.png';

<img src={phpi} alt="Image Php" style={{width: 900}}/>
***Figure: installation des paquets***


On verifie les paquets installes avec: 


```bash
apt policy  php8.3 php8.3-fpm php8-3-mysql libapache2-mod-php8.3 libapache2-mod-fcgid -y
```

import phpv from '/img/phpv.png';

<img src={phpv} alt="Image Php" style={{width: 900}}/>
***Figure: vérification des paquets***


**On lance le service php8.3-fpm et on vérifie son statut** 

```bash
systemctl start php8.3-fpm
systemctl status php8.3-fpm
```
import php8 from '/img/php8.png';

<img src={php8} alt="Image Php" style={{width: 900}}/>
***Figure: démarrage et vérification du statut de php8.3-pm***

- **Fichier de configuration de PHP**

Configuration de  PHP pour la prise en compte du PHP PDO que nous utiliserons dans ce projet. Le fichier se trouve dans /etc/php/8.3/apache/php.ini ou on doit décommenter la ligne d’extension de php mysql pdo (extension=pdo mysql)  comme sur la figure suivante :

  ```bash
  nano /etc/php/8.3/apache2/php.ini
  ```

import phpc from '/img/phpc.png';

<img src={phpc} alt="Image Php" style={{width: 900}}/>
***Figure: fichier de configuration de php***

- **Verification de la verson de PHP  avec :** 


```bash
php --version
```

import phpvr from '/img/phpversion.png';

<img src={phpvr} alt="Image Php" style={{width: 900}}/>
***Figure: version de php***


2. **Création du répertoire de travail dans le document ROOT du serveur Apache2**

Après l’installation du serveur apache2 nous avons l’apparition du document ROOT (/var/ww/html) dans lequel tous travaux nécessitant d’être exécutes par apache et vus sur le navigateur doivent être mis.


-  Déplacement dans le document root :

```bash
 cd /var/www/html/
```
-  Création des répertoires projets/php_procedurale :

```bash
 mkdir -p projets/php_procedurale 
```



import rt from '/img/dRoot.png';

<img src={rt} alt="Image Php" style={{width: 900}}/>
***Figure: document Root***

Visualise l'arborescence de notre repertoire principal:

```bash
tree projets
```
Si la commande tree n'est pas encore  installee on fait :

```bash
apt install tree

```

import rep from '/img/rep.png';

<img src={rep} alt="Image Php" style={{width: 900}}/>
***Figure: nos repertoires parents***

3. **Création d’une base de données dans MySQL au nom de « école » avec une tables « étudiants » et les champs « prénom, nom, classe, note »**

**Les etapes a suivre**

- Se connecter au SGBD MySQL : mysql -u root  -p
- Créer la  base de donnees  « ecole » :  create database ecole;
- Sélectionner la base de données « ecole » pour l’utiliser : use ecole;
- Creer la table etudiants :  « create table etudiants id int primary key auto_increment, prenom varchar(33),nom varchar(33),classe varchar(33),note int;
- Créer un utilisateur « Mamadou »  avec le mot de passe « passer »et lui donner tous les droits sur la base de données : create user mamadou identified by « passer » 
Grant all privileges on ecole.* to Mamadou;


**La mise en pratique**
- Se connecter au SGBD MySQL : 

```bash
mysql -u root  -p

```


import cb from '/img/cb.png';

<img src={cb} alt="Image Php" style={{width: 900}}/>
***Figure: connexion au SGBD MySQL***

-  Créer la  base de donnees  « ecole » : 

```bash
 create database ecole;

```

import base from '/img/base.png';

<img src={base} alt="Image Php" style={{width: 900}}/>
***Figure: creation de la base de donnees***


- Sélectionner la base de données « ecole » pour l’utiliser : 

```bash
use ecole;

```


import usebase from '/img/usebase.png';

<img src={usebase} alt="Image Php" style={{width: 900}}/>
***Figure: selection de la base de donnees***


-  Creer la table etudiants : 

```bash 
create table etudiants id int primary key auto_increment, prenom varchar(33),nom varchar(33),classe varchar(33),note int;
```


import table from '/img/table.png';

<img src={table} alt="Image Php" style={{width: 900}}/>
***Figure: creation de la table etudiants***


-  Desciption de la table etudiants : 

```bash
desc etudiants; 
```

import desc from '/img/desc.png';

<img src={desc} alt="Image Php" style={{width: 900}}/>
***Figure: creation de la table etudiants***


- Créer un utilisateur « Mamadou »  avec le mot de passe « passer »et lui donner tous les droits sur la base de données : 

```bash
create user mamadou identified by ' passer'; 
Grant all privileges on ecole.* to Mamadou;
```

import user from '/img/user.png';

<img src={user} alt="Image Php" style={{width: 900}}/>
***Figure: creation d'utilisateur Mamadou***


4. **Création de notre fichier de code**


Nous allons maintenant créer un fichier « travail.php » dans lequel l’ensemble de nos codes se trouve. Mais comme l’objectif est d’afficher la liste des étudiants dans la base de données école il nous faut les données des étudiants, ce qui nous amène à insérer quelques étudiants dans la table. 


### Insertion de quesques etudiants dans la base de donnees ###

 ```bash
 insert into etudiants(prenom,nom,classe,note) values(‘Exode’,’NGAMENEDE’,’licence3’,16),(‘Leonel’,’GBIAPEKE’,’licence3’,18),(‘Tchapo’,’TCHEDRE’,’licence3’,14),(‘Ferry’, ‘DEGUALLE’,’master’,15),(‘Awa’,’NDIAYE’,’licence2’,19);
 ```


import insert from '/img/insert.png';

<img src={insert} alt="Image Php" style={{width: 900}}/>
***Figure: insertion des etudiants dans la base de donnees***

**On liste les etudiants avec :**

```bash
select * from etudiants;
```

import liste from '/img/liste.png';

<img src={liste} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants dans la base de donnees***

### Création et édition de notre fichier travail.php ###


Maintenant que tout est prêt on crée notre fichier travail.php et on l’édite avec nano bien sûr à la racine de notre projet qui est le répertoire « php_procedurale » dans lequel on va tout faire :

1. Se connecter à la base de données
2.  faire des requêtes SQL sur les données 
3.  Afficher les données récupérées


import doc from '/img/doc.png';

<img src={doc} alt="Image Php" style={{width: 900}}/>
***Figure: repertoire de travail***

```bash
nano travail.php
```
et on ajoute le code suivant:

```bash
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

```



5. **Test du programme** 

Une fois le code en place on peut maintenant tester le programme en prenant un navigateur et on met:

```bash
localhost/projets/php_procedurale/travail.php
```

et on lance 

import tab from '/img/tab.png';

<img src={tab} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants***


Comme nous le constatons tout l’ensemble du code du projet est dans le fichier travail.php 

import mel from '/img/mel.png';

<img src={mel} alt="Image Php" style={{width: 900}}/>
***Figure: fichier code mélangé***

Avec cette méthode la sécurité n’est pas maintenue, en cas de soucis la maintenance ne sera pas rapide, il n’y’a pas de clairvoyance et le code n’est pas bien lisible du fait que tout y est regroupé c’est ainsi que la méthode avec architecture MVC est venue pour remédier à tous ces problèmes.

## c.  Methode en PHP avec MVC procédurale ##



Avec la méthode MVC nous allons maintenant séparer notre code principal en ces trois parties :

**1. Données
  2. Présentation
  3. Traitement**

  Ce qui nous amène à créer trois   fichiers a la racine de notre projet :

**1.  Le fichier modele.php   pour la connexion et les données
2.  Le fichier vue.php pour la présentation c’est-à-dire tout ce qui concerne html
3.  Le fichier controleur.php pour le traitement** 



:::success
On est toujours dans le repertoire php_procedurale
:::

```bash
touch modele.php vue.php controleur.php
```

import ctl from '/img/ctl.png';

<img src={ctl} alt="Image Php" style={{width: 900}}/>
***Figure: creation de nos tris fichiers***




**Les données (model)**
La partie « données » est la partie qui se connecte à la base de données et récupère les informations avec le langage SQL. Dans notre code la partie données est la partie suivante:

```md title="Partie donnees"
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
```


  Comme on peut le voir on a récupéré la partie de la connexion a la base de données et la récupération de la requête. On édite le fichier modele.php

```bash
nano modele.php

```
et on ajoute le code :

```bash
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
```

**La vue  (view/vue)**



La partie vue de notre projet est la partie qui gère tout ce qui est dit interface, tout ce qui est dit fichier html. Cette partie récupère les données dans le modèle et les affiche au navigateur.On va editer le fichier vue.php

```bash
nano vue.php
```

et on aloute code suivsnt:

```md title="Partie vue"

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
```
**Le controleur  (controller)**


Comme on l’a dit lui gère les deux autres parties précédentes c’est lui qui fait la synchronisation   et c’est à lui que l’utilisateur sommet la requête. Dès qu’une demande lui est demandée il va d’abord consulter le modèle qui qui se connecte à la base de données, récupère les données et les lui rend après de soumettre les données a la vue pour la présentation une fois fait cette dernière lui remet les données et lui les retourne à l’utilisateur comme réponse comme nous le montre la figure ci haut du projet. Ainsi le contrôleur en son sein va avoir les deux fichiers précédents, le modèle et la vue. 
  Dans PHP on a require et include qui permettent d’insérer le contenu d’un code dans un autre et c’est ce que nous allons utiliser ici pour inclure nous deux fichiers.
On édite le fichier controleur.php et on inclut les fichiers grâce au require_once

```bash
nano controleur
```
et on ajoute le code suivant:

```md title=Partie controleur
<?php
require_once 'modele.php' ;
require_once 'vuephp' ;

?>
```


 **Différence entre require et require_once en PHP**


En utilisant require(), le fichier peut être inclus plusieurs fois sur la même page Web. En utilisant require_once(), le fichier ne peut être inclus qu'une seule fois sur une page Web



**Test de programme**
Une fois la segmentation de notre code en place on prend le navigateur et on met l’url suivant qui pointe vers le contrôleur et c’est lui qui va maintenant gérer tout le reste quant a l’utilisateur il attend juste le résultat de l’affichage.   
L’url : 

```bash
localhost/projets/php_procedurale/controleur.php
```

import lll from '/img/lll.png';

<img src={lll} alt="Image Php" style={{width: 900}}/>
***Figure: Test reussi avec le modele MVC***


Nous avons remarqué que grâce a la  mise en application du modèle MVC notre travail est devenu souple simple et facile à gérer en cas de problème on s’aura facilement ou ça se trouve et comment y remédier.


{/*
Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
*/}
