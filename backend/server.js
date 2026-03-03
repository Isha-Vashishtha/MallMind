
import { schema } from "./graphql/schema.js";
import { root } from "./graphql/resolvers.js";
require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(`🚀 MallMind Backend running at http://localhost:${PORT}${server.graphqlPath}`)
  );
}

startServer();