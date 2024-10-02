---
sidebar_position: 3
---

# B. LA REECRITURE D’URL DANS UN PROGRAMME EN PHP

import Php1 from '/img/rewrite.jpg';

<img src={Php1} alt="Image Php" style={{width: 600}}/>

## Introduction a la reecriture d'URL.


  Cette partie porte sur la réécriture d'URL en PHP, une technique essentielle pour créer des URL conviviales pour les visiteurs, de pouvoir cacher le chemin original pour tout utilisateur. L'objectif est de rendre les adresses URL plus lisibles, compréhensibles et adaptées aux besoins des utilisateurs. La réécriture va permettre de créer des URL plus simples et plus mnémotechniques, permettant à la fois aux internautes et aux moteurs de recherche de mieux comprendre ce qu’il y a dans la page, de quoi elle traite. 

### Objectif

  La Réécriture d'URL  est une technique permettant de modifier l'adresse d'une page web pour la rendre plus lisible, plus simple pour l'internaute.

import Php11 from '/img/rewrite1.jpg';

<img src={Php11} alt="Image Php" style={{width: 600}}/>

### Les étapes à suivre 
Pour realiser une reecriture d'URL avec PHP nous devons suivre les etapes suivantes: 



**1. Avoir déjà un projet en PHP fonctionnel (le TP sur MVC procédurale)**

**2. Créer un fichier caché très important « .htaccess »**

**3. Créer un site virtuel pour le TP**

**4. Activer le module de réécriture d’Apache**

**5. Faire la correspondance du nom du site virtuel dans le fichier /etc/hosts**

**6. Test sur le navigateur**



### Mise en pratique


**1.  Avoir déjà un projet en PHP fonctionnel (le TP sur MVC procédurale)**

Nous avons travaillé sur ce projet précédemment en mettant en place la méthode MVC (Model view Controller) dans le répertoire racine en local /projets/php_procedural et le test se fait en appelant le contrôleur (controleur.php) sur un navigateur et qui retourne la liste des étudiants. 

:::warning
Toujoujours dans notre repertoire de travail
:::

On verifie notre emplacement: 

```md title="root@Chirst-Ma:/var/www/html/projets/php_procedurale# "
pwd
```

import pwd from '/img/pwd.png';

<img src={pwd} alt="Image Php" style={{width: 900}}/>
***Figure: Emplacement de travail***

L’url pour le test des etudiants : 

```bash
localhost/projets/php_procedurale/controleur.php
```

import etu from '/img/et.png';

<img src={etu} alt="Image Php" style={{width: 900}}/>
***Figure: liste des etudiants qu'on va utiliser pour notre test***

Nous remarquons que pour accéder à la liste des étudiants on doit mettre l’url localhost/projets/php_procedurale/controleur.php ce qui est visible aux yeux de tous l’objectif c’’est de pouvoir cacher ce chemin grâce à la réécriture d’url dans un site virtuel par nom et passer un autre nom  a la place.


2.  Créer un fichier caché très important « .htaccess »

Le fichier .htaccess est un fichier de configuration utilisé sur les serveurs web Apache. Il permet de modifier le comportement du serveur au niveau du répertoire où il est placé. Dans notre cas ici c’est de permettre de recréer notre url d’une autre manière.
Pour le créer sachant qu'on est  à la racine de notre projet

```md title="root@Chirst-Ma:/var/www/html/projets/php_procedurale# "
pwd
```

import pwd1 from '/img/pwd.png';

<img src={pwd1} alt="Image Php" style={{width: 900}}/>
***Figure: Emplacement de travail***


 et on exécute on commande suivante pour creer un fichier caché : 

```bash
nano .htaccess
```

et on met le contenu suivant:

```bash
RewriteEngine on
RewriteRule ^site$ controleur.php [NC]
RewriteRule ^[^/]+/(\d+)$ controleur.php

```

**Explication des lignes du code :**



1.  **RewriteEngine on**
Cette directive active le moteur de réécriture d'URL. Sans cette ligne, aucune des règles suivantes ne sera appliquée. Elle indique à Apache que vous souhaitez utiliser le module mod_rewrite pour gérer les URL.

2. **RewriteRule ^site$ controleur.php [NC]**
**^site$**: Cette expression régulière correspond exactement à l'URL /site.
Le **^** signifie que la correspondance doit commencer au début de l'URL.
Le **$** signifie que la correspondance doit se terminer à la fin de l'URL.
controleur.php : Cela indique que lorsque l'URL correspond à la règle, le serveur doit exécuter le fichier controleur.php.
**[NC]** : Ce flag signifie "No Case" (sans tenir compte de la casse). Cela permet à la règle de correspondre à "site", "Site", "SITE", etc., indépendamment de la façon dont le mot est écrit.

3. **RewriteRule ^[^/]+/(\d+)$ controleur.php**
**^[^/]+/(\d+)$** : Cette expression régulière est plus complexe :
**^[^/]+** : Cela signifie "tout ce qui commence par un ou plusieurs caractères qui ne sont pas des barres obliques". Cela correspond à n'importe quel mot ou identifiant avant une barre oblique.
**/(\d+)** : Cela signifie qu'après la barre oblique, il doit y avoir un ou plusieurs chiffres. Les parenthèses capturent cette partie pour une utilisation ultérieure.
**$** : Indique la fin de l'URL.

:::danger
Ne pas oublier un seul caractère tout est important dans le code 
:::



3.  **Création du site  virtuel pour le TP**

Après la création du fichier .htaccess on va maintenant créer notre fichier « php_reecriture.conf » dans le répertoire /etc/apache2/sites-available/.

- On se déplace dans le répertoire : 

```bash
cd /etc/apache2/sites-available/
```

- On cree et edite le fichier php_reecriture.conf : 

```bash
vim php_reecriture.conf
```


et on met le contenu suivant

```bash

<VirtualHost *:80>
    ServerName ecole.rtn.sn
    DocumentRoot /var/www/html/projets/php_procedurale
        <Directory /var/www/html/projets/php_procedurale>
        AllowOverride All
        </Directory>
</VirtualHost>

```

**Explication du code**


**1. \<VirtualHost \*:80\>**
Cette ligne définit un hôte virtuel qui écoute sur le port 80, qui est le port standard pour le trafic HTTP.
L'astérisque signifie que cet hôte virtuel acceptera les connexions sur toutes les adresses IP disponibles sur le serveur.


**2. ServerName ecole.rtn.sn**
Cette directive spécifie le nom de domaine pour lequel cet hôte virtuel est configuré. Dans notre cas, il s'agit de ecole.rtn.sn.

**3. DocumentRoot /var/www/html/projets/php_procedurale**
Cette ligne définit le répertoire racine (DocumentRoot) à partir duquel les fichiers seront servis pour cet hôte virtuel,les ressources et fichiers Web seront recuperes a partir de ce repertoire.

**4. \<Directory /var/www/html/projets/php_procedurale \>**
Cette section permet de configurer des directives spécifiques pour le répertoire mentionné.
Les directives à l'intérieur de cette section s'appliquent uniquement au répertoire spécifié.

**5. AllowOverride All**
Cette directive permet aux fichiers .htaccess dans le répertoire spécifié de remplacer les paramètres de configuration par défaut d'Apache.
  En utilisant All, on autorise toutes les directives dans le fichier .htaccess, ce qui inclut la réécriture d'URL définie dans notre fichier .htaccess. Donc dès que l’utilisateur tape dans son navigateur ecole.rtn.sn/site directement le fichier .htaccess se charge du reste en appelant le fichier controleur.php tout en gardant le nom ecole.rtn.sn/site sur le navigateur. 



  - On active le site php_reecriture.conf 
Après la fin du fichier de configuration on doit activer notre site virtuel et recharger le serveur apache2

 
```bash
a2ensite php_reecriture.conf
systemctl reload apache2
```

import ent from '/img/ent.png';

<img src={ent} alt="Image Php" style={{width: 900}}/>
***Figure: Activation du site virtuel et rechargement d'apache***


**4.  Activer le module de réécriture d’Apache**

Afin qu’Apache puisse prendre en compte la réécriture d’url on doit activer le module « rewrite » sous Apache et recharger ou redemarrer  le serveur. Pour l’activer on exécute la commande suivante :

```bash
a2enmode rewrite 
Systemctl reload apache2

```


import enmod from '/img/enmod.png';

<img src={enmod} alt="Image Php" style={{width: 900}}/>
***Figure: Activation du module et rechargement d'apache***



**5.  Faire la correspondance du nom du site virtuel dans le fichier /etc/hosts**

Comme on n’a pas de serveur DNS le système Linux met en autre possession un fichier /etc/hosts dans lequel nous pouvons faire la correspondance du type A pour nos sites.
On édite le fichier /etc/hosts

```bash
nano /etc/hosts
```

import host from '/img/host.png';

<img src={host} alt="Image Php" style={{width: 900}}/>
***Figure: correspondance du nom du site virtuel***


**6.  Test sur le navigateur**

Après toutes ces configurations on peut maintenant procéder au test sur notre navigateur. Et comme nous l’avons configuré on mettra l’url http://ecole.rtn.sn/site et directement cela nous affichera la liste des étudiants sans pouvoir indiquer réellement notre fichier controleur.php

```bash
 http://ecole.rtn.sn/site 
 ```

import resite from '/img/resite.png';

<img src={resite} alt="Image Php" style={{width: 900}}/>
***Figure: test du site reussi***

Nous remarquons qu’on arrive a réécrire notre url d’une autre manière nous permettant de donner une bonne visibilité et lisibilité aux utilisateur et c’est sécurisé aussi car un attaquant qui vous voudrait attaquer notre site ne pourra pas connaitre le vrai chemin de nos données. 