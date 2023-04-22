const BillTypes = `#graphql
type Bill{
    id:Int!
    name:String!
    cost:Float!
}

extend type Query{
    AllBills:[Bill],
    Bill(id: Int): Bill
}

extend type Mutation{
    createBill(name:String!, cost:Float!): Bill,
    updateBill(id:Int!, name:String!, cost:Float!): Bill,
    deleteBill(id:Int!): String
}
`;

export { BillTypes };
