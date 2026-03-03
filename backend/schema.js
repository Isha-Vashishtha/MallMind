const { gql } = require("apollo-server-express");

module.exports = gql`

  type Session {
    id: ID!
    createdAt: String!
  }

  type Product {
    store: String!
    name: String!
    sizes: [String!]!
    price: Float!
  }

  type Route {
    path: [String!]!
    distance: Float!
  }

  type Query {
    createSession: Session
    searchInventory(keyword: String!): [Product]
    stylistSuggestion(input: String!): String
    calculateRoute(start: String!, end: String!): Route
  }
`;