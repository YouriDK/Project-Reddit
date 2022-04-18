import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
// * Création de la base de données
@ObjectType() // *  # -> Pour qu'il soit utilisable par GraphQL
@Entity()
export class Post {
  @Field() //* #
  @PrimaryKey()
  _id!: number;

  @Field(() => String) //* #
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field(() => String) //* #
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field() //* # , SI je met FIeld en Commentaire il ne sera pa visible dans le graphQL
  @Property({ type: "text" })
  title!: string;
}
