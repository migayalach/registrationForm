const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormState",
    {},
    {
      timestamps: false,
    }
  );
};
