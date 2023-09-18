const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Category",
    {
      idCategory: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // host: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // directionIp: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // controlLabel: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // internalPhone: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
    },
    {
      timestamps: false,
    }
  );
};
