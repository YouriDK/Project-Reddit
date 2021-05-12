import { dedupExchange, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";

const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" as const }, // * Permet de rajouter le cookie
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (_result, _args, cache, _info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>( // *  Permet de rafraiher la page quand on se déco
              cache,
              { query: MeDocument },
              _result,
              () => ({ me: null })
            );
          },

          login: (_result, _args, cache, _info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
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
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});

export default createUrqlClient;
