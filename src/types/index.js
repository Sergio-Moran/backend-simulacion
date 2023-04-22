import { DataTypes } from "./Data.js";
import { ProductTypes } from "./Product.js";
import { BillTypes } from "./Bill.js";

const GlobalTypes = `#graphql
scalar DateTime

    type Query{
        _: String
    }
    type Mutation{
        _: String
    }
`;

export default [GlobalTypes, DataTypes, ProductTypes, BillTypes];
