const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormEquipment",
    {
      control: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dataP: {
        type: DataTypes.STRING,
        defaultValue: "0",
        allowNull: false,
      },
      dataHos: {
        type: DataTypes.STRING,
        defaultValue: "0",
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
