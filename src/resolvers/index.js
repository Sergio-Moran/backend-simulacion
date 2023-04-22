import { DataResolver } from "./Data.js";
import { ProductResolver } from "./Product.js";

const GlobalResolver = {
  Query: {
    _: () => "Query",
  },
  Mutation: {
    _: () => "Mutation",
  },
};

export default [GlobalResolver, DataResolver, ProductResolver];
