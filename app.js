import 'dotenv/config.js'
import Express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./src/graphql/resolvers.js";
import typeDefs from "./src/graphql/typeDefs.js";

const app = Express();
const port = process.env.PORT || 3000;

async function start() {
  // extend the server with graphql
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  }); // file settings

  await apolloServer.start(); // run the server
  apolloServer.applyMiddleware({ app }); // add context to the server of express
  app.get("*", (req, res) => res.status(404).send("Not Found")); // add ulr for any errors

  // server of express
  app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
  });
}

start();
