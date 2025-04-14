const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Client = require("./client");

const FormDraft = sequelize.define("FormDraft", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: "id",
    },
  },
  elements: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = FormDraft;
