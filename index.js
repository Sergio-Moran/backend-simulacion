import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Data, sequelize } from "./server.js";
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars";

const typeDefs = [
  DateTimeTypeDefinition,
  `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  # This "Data" type defines the queryable fields for every book in our data source.
  type Data {
    id: Int!
    date: DateTime!
    count: Int!
    service_time: Float!
    wait_time: Float!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "datas" query returns an array of zero or more Books (defined above).
  type Query {
    AllData: [Data],
    Data(id: Int): Data
  }
    `,
];

/* const data = [
  {
    id: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]; */

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves datas from the "datas" array above.
const resolvers = {
  DateTime: DateTimeResolver,
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
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
