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
