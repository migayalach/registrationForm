const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Form",
    {
      idForm: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      // dateStart: {
      //   type: DataTypes.STRING,
      //   // defaultValue: DataTypes.NOW,
      //   allowNull: false,
      // },
      dateStart: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      dateEnd: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
