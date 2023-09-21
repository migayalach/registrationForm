const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Credential",
    {
      idCredential: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
