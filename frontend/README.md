# Example app with [chakra-ui](https://github.com/chakra-ui/chakra-ui)

This example features how to use [chakra-ui](https://github.com/chakra-ui/chakra-ui) as the component library within a Next.js app.

We are connecting the Next.js `_app.js` with `chakra-ui`'s Theme and ColorMode containers so the pages can have app-wide dark/light mode. We are also creating some components which shows the usage of `chakra-ui`'s style props.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui&project-name=with-chakra-ui&repository-name=with-chakra-ui)

# NEXTJS

Tips. une page crée devient automatiquent une route ( ex : localhost/register )

1.  Pour sortir le fichier tsx dans generated il fallait installer @graphql-codegen/typescript-operations
2.  La méthodologie mainetant c'est écrire la query dans le dossier graphql puis éxéctuer npm run gen pour créer le fichier tsx dans generated et ainsi pouvoir directement  
    utiliser le ficher correctement

3.  Pb rencontrés avecla fonction :
    login: (\_result, \_args, cache, \_info) => {
    betterUpdateQuery<LoginMutation, MeQuery>(
    cache,
    { query: MeDocument },
    \_result,
    (result, query) => {
    if (result.login.errors) {
    return query;
    } else {
    return {
    me: result.login.user,
    };
    }
    }
    );
    },

    au niveau de (result, query) , le type n'était pas bon , il fallait rajouter \_id dans la récupération d'infos pour le login et le register

4.  Diff between server side on & off
    Server side rendering : charge les données du côté serveur et ensuite affiche la page sans indicateur de chargement ( genre le Loading)
    Server side off : il charge la page, et ensuite il va chercher les données côté serveur ce qui peut laisser paraitre une page de chargement( genre le Loading)
    Si les données doivent être trouvés par un bon SEO ( ex : Google ), alors on active le SSR

    SSR :
    me -> browse http://local:3000
    _ next.js server
    _ requestion graphql server http://local:4000
    _ building the HTML
    _ sending back to your browser

    Il y a server side rendering & client rendering
    Navbar fetch le current user, navbar est sur index et pr index ssr est true donc il va request au nextjs mais il n'a pas de cookie , c'est pour ça si on fait un console.log , ce sera null , il faut donc que lorsque que c'est un serverside rendering il n'appelle pas le serveur inutilement

5.  Pour la page token on a écrit "New File" -> change-password/[token].tsx
    Ainsi on a crée un dossier change-password avec une page [token] , ça ceut dire que le token est amené à changeé
