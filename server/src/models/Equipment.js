const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Equipment",
    {
      idEquipment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      host: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // directionIp: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // controlLabel: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
