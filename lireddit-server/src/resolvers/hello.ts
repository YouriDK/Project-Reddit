import { Query, Resolver } from "type-graphql";

//  *  GraphQL query example
@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "Hello";
  }
}
