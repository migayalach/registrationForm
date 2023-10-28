const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormEquipment",
    {
      control: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      host: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idUnique: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
