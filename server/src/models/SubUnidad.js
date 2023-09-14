const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "SubUnit",
    {
      idSubUnit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      nameSubUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
