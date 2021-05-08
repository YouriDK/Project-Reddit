import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

//  *  GraphQL query example
@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext) {
    // * If you're not logged in
    if (!req.session.userId) {
      /*console.log("try : ", req.session);
      console.log("ID TRY : ", req.session.userId);*/
      return null;
    }
    const user = await em.findOne(User, { _id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req, em }: MyContext
  ) {
    if (options.username.length <= 2) {
      return {
        errors: [
          { field: "username", message: "length must be greater than 2 " },
        ],
      };
    }
    if (options.password.length <= 2) {
      return {
        errors: [
          { field: "password", message: "length must be greater than 3 " },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);

    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(user);
    } catch (error) {
      if (
        error.code === "23505" /*|| error.detail.includes("already exist")*/
      ) {
        return {
          errors: [{ field: "username", message: "username already taken" }],
        };
      }
    }
    // *  Store ID in Cookie to keep it logged in
    req.session.userId = user._id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: " that usernamae doesn't exist ",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: " incorrect password ",
          },
        ],
      };
    }
    req.session.userId = user._id; // * Variable que l'on crée dans le quel on va stocker des infos

    /*console.log("FACTS : ", req.session);
    console.log("ID FACTS : ", req.session.userId);*/
    return { user };
  }
}