import { ApolloServer } from "apollo-server-micro";
import * as typeDefs from "./schemas";
import { resolvers } from "./resolvers";
console.log(typeDefs)
const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });