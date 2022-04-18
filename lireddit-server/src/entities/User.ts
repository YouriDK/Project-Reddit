import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
// * Création de la base de données
@ObjectType() // *  # -> Pour qu'il soit utilisable par GraphQL
@Entity()
export class User {
  @Field() //* #
  @PrimaryKey()
  _id!: number;

  @Field(() => String) //* #
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field(() => String) //* #
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field() //* # , Si je met FIeld en Commentaire il ne sera pa visible dans le graphQL
  @Property({ type: "text", unique: true })
  username!: string;

  @Field()
  @Property({ type: "text", unique: true, nullable: true })
  email!: string;

  @Property({ type: "text" })
  password!: string;
}
