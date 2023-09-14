const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nroIdentification: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      issued: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
