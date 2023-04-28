import { Product } from "../db/server.js";

const ProductResolver = {
  Query: {
    AllProducts: async () => {
      const data = await Product.findAll();
      return data;
    },
    Product: async (_, { id }) => {
      const data = await Product.findByPk(id);
      return data;
    },
  },
  Mutation: {
    createProduct: async (_, { name, cost, price }) => {
      const data = await Product.create({ name, cost, price });
      return data;
    },
    updateProduct: async (_, { id, name, cost, price }) => {
      const data = await Product.update(
        { name, cost, price },
        {
          where: {
            id: id,
          },
        }
      );

      return await Product.findByPk(id);
    },
    deleteProduct: async (_, { id }) => {
      await Product.destroy({
        where: {
          id: id,
        },
      });
      return "Deleted";
    },
  },
};

export { ProductResolver };
