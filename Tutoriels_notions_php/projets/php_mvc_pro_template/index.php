<?php
  // index.php
  // On charge les modeles et les controleurs
  require_once 'modele.php';
  require_once 'controllers.php';
  // gestion des routes
  $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
//print_r($uri);
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

