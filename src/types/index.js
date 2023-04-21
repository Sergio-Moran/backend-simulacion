import { DataTypes } from "./Data.js";

const GlobalTypes = `#graphql
scalar DateTime

    type Query{
        _: String
    }
    type Mutation{
        _: String
    }
`;

export default [GlobalTypes, DataTypes];
