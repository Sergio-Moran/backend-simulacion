const DataTypes = `#graphql
type Data {
    id: Int!
    date: DateTime!
    count: Int!
    service_time: Float!
    wait_time: Float!
  }

  extend type Query {
    AllData: [Data],
    Data(id: Int): Data
  }
`;

export { DataTypes };
