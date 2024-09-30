"use strict";(self.webpackChunkexode_docus_1=self.webpackChunkexode_docus_1||[]).push([[5361],{5860:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(4848),i=s(8453);const r={sidebar_position:1,title:"Hebergement de site"},a="Hebergement d'un site par dossier et par nom sous Apache2",d={type:"mdx",permalink:"/site/",source:"@site/src/pages/site/index.md",title:"Hebergement de site",description:"Fait par Exode NGAMENEDE le 13/09/2024",frontMatter:{sidebar_position:1,title:"Hebergement de site"},unlisted:!1},c={},o=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hebergement-dun-site-par-dossier-et-par-nom-sous-apache2",children:"Hebergement d'un site par dossier et par nom sous Apache2"})}),"\n",(0,t.jsx)(n.p,{children:"Fait par Exode NGAMENEDE le 13/09/2024"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Le serveur Apache2",src:s(4400).A+"",width:"1024",height:"512"})}),"\n",(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Apache est un logiciel de serveur web gratuit et open-source qui alimente environ 46% des sites web \xe0travers le monde. Le nom officiel est Serveur Apache HTTP et il est maintenu et d\xe9velopp\xe9 par Apache Software Foundation."}),"\n",(0,t.jsx)(n.p,{children:"Il permet aux propri\xe9taires de sites web de servir du contenu sur le web \u2013 d\u2019o\xf9 le nom \xab serveur web \xbb -. C\u2019est l\u2019un des serveurs web les plus anciens et les plus fiables avec une premi\xe8re version sortie il y a plus de 20 ans, en 1995."}),"\n",(0,t.jsx)(n.h1,{id:"installation-dapache2-sous-ubuntu-2004",children:"Installation d'Apache2 sous Ubuntu 20.04"}),"\n",(0,t.jsx)(n.p,{children:"Le serveur Apache2 est un serveur open-source et installable sous les systemes d'exploitation Windows  et Linux.\nPour installer Apache2 sous Ubuntu il faut suivre les etapes suivantes:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 1:"}),"  Mettre a jour les paquets du systeme"]}),"\n",(0,t.jsxs)(n.p,{children:["Apres avoir executer la commande ",(0,t.jsx)(n.strong,{children:"sudo -s"})," pour se connecter en tantque Root superutilisateur,avant toute autre  operation on doit mettre  a jour les paquets pour une bonne marche."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt update\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(8578).A+"",width:"1022",height:"266"}),"\nFigure: Mise a jour des paquets du systeme"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 2:"})," Installation du serveur Apache2"]}),"\n",(0,t.jsx)(n.p,{children:"Apres la mise a jour des paquets on peut maintenant installer le serveur Apache2 par la commande suivante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt install apache2\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(4244).A+"",width:"1206",height:"433"}),"\nFigure: Installation du serveur Apache2"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 3:"})," Verification d'installation du serveur Apache2"]}),"\n",(0,t.jsx)(n.p,{children:"Apres l'installation du serveur on verifie le paquet par la commande suvante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt policy apache2\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(5244).A+"",width:"1212",height:"225"}),"\nFigure: Verification du serveur Apache2"]}),"\n",(0,t.jsx)(n.p,{children:"Le serveur Apache2 utilise le port 80,verifions si le port 80 est ouvert avec la commande suivante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"netstat -anp |grep -w 80 \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(6883).A+"",width:"966",height:"148"}),"\nFigure: Verification du port Apache2"]}),"\n",(0,t.jsx)(n.admonition,{type:"success",children:(0,t.jsx)(n.p,{children:"Quelques fichiers et repertoires importants"})}),"\n",(0,t.jsx)(n.p,{children:"Une fois le serveur Apache2 installe,on doit connaitre ses  fichiers  importants:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Le fichier de configuration du serveur Apache  qui se trouve dans ",(0,t.jsx)(n.strong,{children:"/etc/apache2/apache2.conf"})]}),"\n",(0,t.jsxs)(n.li,{children:["Le document root qui est le repertoire dans lequel tous fichiers d'Apache2 sont charges ",(0,t.jsx)(n.strong,{children:"/var/www/html"})]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"hebergement-dun-site-web-par-dossier--sous-apache2",children:"Hebergement d'un site web par dossier  sous Apache2"}),"\n",(0,t.jsxs)(n.p,{children:["L'hebergement d'un site par dossier  est tres important.Nous devons savoir qu'une fois le serveur en place il a son site par defaut dans le document root avec un fichier index.html qui se lance au demarrage.Ainsi quand on prend un naviateur par defaut Firefox sous Ubuntu on tape ",(0,t.jsx)(n.strong,{children:"localhost"})," directement la page suivante apparait."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(7769).A+"",width:"1834",height:"954"}),"\nFigure: Site  d'Apache2 par defaut"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pour la mise en place de notre site par dossier on doit suivre les etapes suivantes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 1:"}),"  Se positionner dans le document root**"]}),"\n",(0,t.jsxs)(n.p,{children:["Pour cela on doit se  deplacer dans le document root ",(0,t.jsx)(n.strong,{children:"/var/www/html"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /var/wwww/html\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(1112).A+"",width:"1059",height:"73"}),"\nFigure: Document root d'Apache"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 2:"}),"  Creation de notre dossier ",(0,t.jsx)(n.strong,{children:"dossier_site1"})]}),"\n",(0,t.jsx)(n.p,{children:"On cree le dossier avec la commande suivante"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir dossier_site1\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(3401).A+"",width:"1200",height:"103"}),"\nFigure: Creation du dossier"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 3:"})," Deplacement dans le repertoire dossier_site1\nOn se  deplace dans le dossier dossier_site1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd dossier_site1\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(8799).A+"",width:"1005",height:"82"}),"\nFigure: Deplacement dans le dossier"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 3:"})," Creation et edition de notre fichier index.html"]}),"\n",(0,t.jsx)(n.p,{children:"On cree alors un fichier index.html  et on ajoute du contenu comme sur les figures suivantes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"touch index.html\nnano index.html\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(9578).A+"",width:"952",height:"105"}),"\nFigure: Creation du fichir index.html"]}),"\n",(0,t.jsx)(n.p,{children:"On ajoute le contenu suivant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<html>\n<head>\n <meta charset="utf-8">\n <meta name="viewport" content="width=device-width, initial-scale=1">\n <title>Hebergement par dossier</title>\n</head>\n<body>\n<h2>Bonjour les amis,on a reussi notre hebergement par dossier sous Apache</h2>\n</body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 4:"})," Test de bon fonctionnement"]}),"\n",(0,t.jsxs)(n.p,{children:["Apres toutes ces configurations on peut maintenant tester notre site.Pour cela on prend on navigateur et on met (",(0,t.jsx)(n.a,{href:"http://localhost/dossier_site1/",children:"http://localhost/dossier_site1/"}),") et on valide"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"test",src:s(2051).A+"",width:"1435",height:"405"}),"\nFigure: Test reussi"]}),"\n",(0,t.jsx)(n.h1,{id:"hebergement-dun-site-web-par-nom--sous-apache2",children:"Hebergement d'un site web par nom  sous Apache2"}),"\n",(0,t.jsx)(n.p,{children:"Heberger un site par nom est le moyen le plus utilise car on aura juste a mettre le nom donne a notre site et on parvient a acceder au site.Pour la mise en pratique apres tout ce que nous avons fait jusqu'ici le travail devient facile.On suit seulement ces quelques etapes."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 1:"}),"  Creation d'un site virtuel"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"On doit savoir que toutes les etapes precedentes sont faites"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Installation du serveur"}),"\n",(0,t.jsx)(n.li,{children:"Creation du dossier du site dans le document root"}),"\n",(0,t.jsx)(n.li,{children:"Creation du fichier index.html"}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Pour creer le site virtuel on se deplace dans /etp/apache2/sites-available et on cree un fichier avec extension .conf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /etc/apache2/sites-available\ntouch site1.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"update",src:s(7443).A+"",width:"894",height:"174"}),"\nFigure: Creation du fichier de configuration de notre site virtuel"]}),"\n",(0,t.jsx)(n.p,{children:"On edite le fichier site1.conf et on met les parametres essentiels pour notre site"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<VirtualHost *:80>\n    ServerName site-docus.sn\n    DocumentRoot /var/www/html/dossier_site1\n    directoryIndex index.html\n\n</VirtualHost>\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Figure: Configuration de notre sitre par nom"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Explication du code"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Les balises VirtualHost :\nCes balises montrent que nous voulons creer un site virtuel et 80 montre que le site tourne sur le port 80 qui est le port par defaut d'Apache"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["ServerName ",":Ce"," parametre designe le nom de notre site par nom"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"DocumentRoot : C'est le repertoire ou se trouve nos fichiers du site"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"DirectoryIndex : Il designe directement sur quel fichier le site va demarrer une fois le nom du site sur le navigateur"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Respect de chaque caratere minuscule et majuscule,la notion de casse est tres importante"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 2:"}),"  Activation du site virtuel"]}),"\n",(0,t.jsx)(n.p,{children:"Apres la configuration du site on l'active par la commande suivante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"a2ensite site1.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"activatikn",src:s(9910).A+"",width:"952",height:"66"}),"\nFigure: Activation du site"]}),"\n",(0,t.jsx)(n.p,{children:"Apres l'activation du site on doit recharger le serveur Apache avec la commande suivante:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl restart apache2\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"rechargement",src:s(2144).A+"",width:"922",height:"136"}),"\nFigure: rechargement du serveur Apache2"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 3:"})," Resolution de nom"]}),"\n",(0,t.jsx)(n.p,{children:"On devrait avoir un serveur DNS pour faire la resolution du nom du site mais comme il n'y apas de serveur DNS il existe un fichier sous Ubuntu /etc/hosts qui nous permet de faire ca.Alors on edite ce fichier et on fait la resolution sur notre machine en local.\nOn edite le fichier"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano /etc/hosts\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"fichier host",src:s(3804).A+"",width:"1332",height:"274"}),"\nFigure: Resolution du nom"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Etape 4:"})," Test de bon fonctionnement"]}),"\n",(0,t.jsx)(n.p,{children:"Apres ces differentes configurations on modifie notre fichier index.html"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano /var/www/html/dossier_site1/index.html\n"})}),"\n",(0,t.jsx)(n.p,{children:"Et on met le contenu suivant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Hebergement par nom</title>\n</head>\n<body>\n<h2>Bonjour les amis,on a reussi notre hebergement par nom sous Apache</h2>\n</body>\n</html>\n\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["et  maintenant on test le site en prenant un navigateur et on met\n(",(0,t.jsx)(n.a,{href:"http://site-docus.sn",children:"http://site-docus.sn"}),") et on accede au site"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"fichier site",src:s(7935).A+"",width:"1201",height:"277"}),"\nFigure",":Acces"," au site par  nom"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Pendant ce tutoriel nous avons appris les fondamentaux des hebergements sous Apache,des pratiques tres utiles sur le serveur Apache"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4400:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Apache_image-53dbbd99efa756ec23e7b50258af3c3a.png"},7935:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/acces_site-8bc865cd6a473f2a8ee3b0ade8908bbf.png"},9910:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/act_site-6090b20095fa408d10bdd18f9c32f3ea.png"},8578:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/capture_update-2445f6aa199f298d1c0b3734e7f69470.png"},3401:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/creation_dossier-07ccd89d78d0a5453971240dfe73541a.png"},8799:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/dep_dossier-47a5898c74b0bd552f9d146c711610ba.png"},3804:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/fic_hosts-06a71b43185fcb4c0f2d618839daf6bd.png"},9578:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/index-aea9666298c98cc3255b604fed02cd7b.png"},4244:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/inst_apach2-313fb49645437c006acef6d8c4d283ca.png"},7769:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/lo_apach2-46d0914a85796472228ce77f704b3d93.png"},2051:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/local-722c6bf31a5e34c7a9508c61f3ad447f.png"},6883:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/port_apach2-1127bf6bd3757b22302627e15c34a859.png"},2144:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/recharg-7ea8cf2ef9191fd1035cafd1ba2de6d5.png"},1112:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/root_apach2-2ffd5358b23c909867e59f70c07ad608.png"},7443:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/site_av-0eb3c730b12662f73fdcb47235354c22.png"},5244:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/veri_apach2-5e1fb57b27a1f6e566387d79668a5624.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);