import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "db-simulacion",
  "root",
  "geologiaEstructural",
  {
    host: "localhost",
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

export { sequelize, Data };
