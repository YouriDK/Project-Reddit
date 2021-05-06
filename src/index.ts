import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constant";
//import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
const main = async () => {
  const orm = await MikroORM.init(microConfig);
  orm.getMigrator().up(); // *  Connect to DB, run Migration etc...

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started on locahost:4000 !! ");
  });

  /*
  * const post = orm.em.create(Post, { title: "my first post bis" });
  * const posts = await orm.em.find(Post, {});
  * console.log(posts);
  * Pour déposer sur la BDD
  * await orm.em.persistAndFlush(post);
  
  */
  /*
   ! await orm.em.nativeInsert(Post, { title: " first post pal " });
   ! créer un soucis lors du push car il ne crée pas de nouvel date
   */
};

main().catch((error) => {
  console.log(error);
});
