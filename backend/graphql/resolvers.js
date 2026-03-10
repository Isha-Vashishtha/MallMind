export const resolvers = {
  Query: {
    shop: async (_, { input }) => {
      const intent = await analyzeIntent(input);
      const parsedBudget = intent.budget
        ? parseInt(intent.budget.replace(/[^0-9]/g, ""))
        : null;
      let matches = [];
      stores.forEach((store) => {
        store.products.forEach((item) => {
          const categoryMatch =
            intent.product &&
            item.category.toLowerCase().includes(intent.product.toLowerCase());
          const colorMatch =
            intent.color &&
            item.color.toLowerCase() === intent.color.toLowerCase();
          const priceMatch =
            parsedBudget ? item.price <= parsedBudget : true;
          if (categoryMatch && priceMatch) {
            if (!intent.color || colorMatch) {
              matches.push({
                store: store.storeName,
                location: store.location,
                product: item.name,
                price: item.price
              });
            }
          }
        });
      });
      let navigation = null;
      if (matches.length > 0) {
        navigation = findShortestPath("Entrance", matches[0].store);
      }
      return {
        ...intent,
        recommendations: matches,
        navigation
      };
    }
  }
};