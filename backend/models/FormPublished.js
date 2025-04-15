const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Client = require("./client");

const FormPublished = sequelize.define("FormPublished", {
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
  is_publish: {
    type: DataTypes.INTEGER,
    defaultValue: 1, // 1 for published
    comment: "1 = publish, 0 = draft",
  },
});

module.exports = FormPublished;
