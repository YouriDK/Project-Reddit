#START#
Pour démarrer il faut ouvrir deux terminal , un avec la commande watch et l'autre dev
Sans oublier maintenant, qu'il faut ouvrir les deux redis ( cli et server )
PB : em est indéfini !!!

0.  npm -y : Créer le package.json , le -y dis oui à tout
    npm install -D @types/node typescript : rajouter typescript
    npm install -D ts-node : pouvoir rajouter le scrip start précis dans le json
    npx tsconfig.json : obtenir une config node toute fait # mais apparemment ts-node est lent
    npm run watch : il va comparer et créer le fichier en Javascript , d'où après la séparation des deux type de start

    Il faut faut run watch en meme temps que nodemon pour qu'il se rende compte des changements dans le src puis le dist

1.  Création de la partie BDD avec MikroOrm
2.  Test & application du CRUD
3.  installation de express (middelware), apollo-server-express(facilte l'utilisation de graphql), graphql, type-graphql
    Implmentation de la première Query GraphQL
    http://localhost:4000/graphql permet de tester ses queries
    installer reflect-metadata

4.  Erreurs rencontrés : il fallait npm install class-validator
    il fallait mettre ../entities/Post et non src/entities/Post

    To be continued : Register Resolver 1:09:23

5.  Mikro-orm va comparer les entities et la BDD
    On crée l'entitié puis ensuite on crée le resolver

    Dans graphqQL ( dans le cadre de resolver en tout cas) on peut créer un objet qui va englober tous les Arg au lieu de les mettre à la chaine dans la fonction

6.  Pour hash le mdp au lieu de bcrypt on passe à argon2
7.  Une fois e resolver créée il suffit de le mettre dans le schéma
8.  On stock les infos de connexion dans les cookies ( redis , connect-redis, express-session)
9.  Problème rencontrés avec Express.Session , pas reconnu à cause d'un changement de version il a fallu enlever le context dans Appollo serveur
    et mettre une autre ligne pour indiquer le paramètre de session
10. Pb rencontrés car il faut installer redis sur le pc
