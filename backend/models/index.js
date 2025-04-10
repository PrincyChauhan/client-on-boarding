const sequelize = require("../config/db");
const FormDraft = require("./FormDraft");
const Client = require("./client");

const db = {
  sequelize,
  FormDraft,
  Client,
};

db.syncDatabase = async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync({});
    // await sequelize.sync({ alter: true });
    console.log("All tables synced successfully!");
  } catch (err) {
    console.error("Error syncing database:", err);
  }
};
module.exports = db;
