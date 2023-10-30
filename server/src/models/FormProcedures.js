const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormProcedures",
    {},
    {
      timestamps: false,
    }
  );
};
