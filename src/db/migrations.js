import { sequelize } from "./server.js";

(async () => {
  await sequelize.sync();
  console.log("Database migrated successfully");
})();
