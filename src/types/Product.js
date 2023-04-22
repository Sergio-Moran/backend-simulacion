const ProductTypes = `#graphql
type Product{
    id:Int!
    name:String!
    cost:Float!
    price:Float!
}

extend type Query{
    AllProducts:[Product],
    Product(id: Int): Product
}

extend type Mutation{
    createProduct(name:String!, cost:Float!, price:Float!): Product,
    updateProduct(id:Int!, name:String!, cost:Float!, price:Float!): Product,
    deleteProduct(id:Int!): String
}
`;

export { ProductTypes };
