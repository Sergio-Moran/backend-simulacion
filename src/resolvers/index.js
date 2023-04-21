import { DataResolver } from "./Data.js";

const GlobalResolver = {
  Query: {
    _: () => "Query",
  },
  Mutation: {
    _: () => "Mutation",
  },
};

export default [GlobalResolver, DataResolver];
