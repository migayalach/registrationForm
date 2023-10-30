const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormUserApi",
    {},
    {
      timestamps: false,
    }
  );
};
