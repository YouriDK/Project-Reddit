import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },

  entities: [Post], // * table de données
  dbName: "lireddit",
  //* Infos néccessaire
  port: 5433,
  user: "postgres",
  password: "postgres",

  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; // *  permet de définir le type et de prendre le premier
