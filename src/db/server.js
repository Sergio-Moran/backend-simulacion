import { Sequelize, DataTypes } from "sequelize";

console.log({ name: process.env.DB_NAME });

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "",
    dialect: "mysql",
  }
);

const Data = sequelize.define(
  "Data",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: "TIMESTAMP",
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_time: {
      type: DataTypes.FLOAT(7, 4),
      allowNull: false,
    },
    wait_time: {
      type: DataTypes.FLOAT(7, 4),
      allowNull: false,
    },
  },
  {
    tableName: "data",
    timestamps: false,
  }
);

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(7, 2),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(7, 2),
      allowNull: false,
    },
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

const Bill = sequelize.define(
  "Bill",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(7, 2),
      allowNull: false,
    },
  },
  {
    tableName: "bill",
    timestamps: false,
  }
);

export { sequelize, Data, Product, Bill };
