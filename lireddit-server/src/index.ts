import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constant";
//import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
//import { sendEmail } from "./utils/sendEmail";

const main = async () => {
  //sendEmail("bob@bob.com", "Hello Buddy");

  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up(); // *  Connect to DB, run Migration etc...

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  // * Permet d'aviter le CORS error dans le front
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  // ! SESSION MIDDLEWARE
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // * 10 years,
        httpOnly: true,
        sameSite: "lax", // TODO rechercher ce que ça fait (csrf)
        secure: __prod__, // * Cookie onlky wokrs on https
      },
      saveUninitialized: false,
      secret: "dsqfgf", // TODO  : environnement variable à faire qu'il faudra cacher
      resave: false,
    })
  );

  // ! APPOLLO MIDDLEWARE
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res }), // ! SI on enlève ça , les fonctions ne vont plus reconnaiter em
  });

  apolloServer.applyMiddleware({
    app,
    cors: false, // * Permet d'aviter le CORS error dans le front
  });

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
