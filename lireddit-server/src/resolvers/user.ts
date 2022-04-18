import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";
import { EntityManager } from "@mikro-orm/postgresql";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constant";
import { UsernamePasswordInput } from "../utils/UsernamePasswordInput";
import validateRegister from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";

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
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, em, req }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "length must be greater than 3 ",
          },
        ],
      };
    }
    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(FORGET_PASSWORD_PREFIX + token);
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "token exprired",
          },
        ],
      };
    }

    const user = await em.findOne(User, { _id: parseInt(userId) });
    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "user no longer exist",
          },
        ],
      };
    }
    user.password = await argon2.hash(newPassword);
    em.persistAndFlush(user);
    await redis.del(key);

    // * Log in user after changed password
    req.session.userId = user._id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotpassword(
    @Ctx() { em, redis }: MyContext,
    @Arg("email") email: string
  ) {
    const user = await em.findOne(User, { email });
    if (!user) {
      console.log("EMAIL : ", email);
      console.log("NOT FOUND", user);
      // *  The email is not the db
      return true;
    }
    const token = v4();
    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user._id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    ); // * 3 Days

    sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
    );
    return true;
  }

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
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }
    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      const result = await (em as EntityManager)
        .createQueryBuilder(User)
        .getKnexQuery()
        .insert({
          username: options.username,
          email: options.email,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .returning("*");
      user = result[0];
      //await em.persistAndFlush(user);
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
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(
      User,
      usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    );
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "  doesn't exist Bro ",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);
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

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
        }
        resolve(true);
      });
    });
  }
}
