const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FormDraft = sequelize.define("FormDraft", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  elements: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = FormDraft;
