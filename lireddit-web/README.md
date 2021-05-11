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
