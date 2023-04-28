import { Data, sequelize } from "../db/server.js";

const DataResolver = {
  Query: {
    AllData: async () => {
      /* const data = await sequelize.query("SELECT * FROM data WHERE id = 15"); */
      const data = await Data.findAll();
      return data;
    },
    Data: async (_, { id }) => {
      const data = await Data.findByPk(id);
      return data;
    },
  },
  Mutation: {},
};

export { DataResolver };
