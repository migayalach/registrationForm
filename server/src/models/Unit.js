const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Unit",
    {
      idUnit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      nameUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
