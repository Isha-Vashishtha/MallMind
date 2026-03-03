const { v4: uuid } = require("uuid");

const inventory = require("../data/inventory.json");
const stylistAgent = require("../agents/stylistAgent");
const navigatorAgent = require("../agents/navigatorAgent");

let sessions = [];

module.exports = {
  Query: {
    createSession: () => {
      const session = {
        id: uuid(),
        createdAt: new Date().toISOString(),
      };
      sessions.push(session);
      return session;
    },

    searchInventory: (_, { keyword }) => {
      return inventory.flatMap(store =>
        store.products
          .filter(p =>
            p.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map(p => ({
            store: store.store,
            name: p.name,
            sizes: p.sizes,
            price: p.price
          }))
      );
    },

    stylistSuggestion: (_, { input }) => {
      return stylistAgent.suggestStyle(input);
    },

    calculateRoute: (_, { start, end }) => {
      return navigatorAgent.calculateRoute(start, end);
    }
  }
};