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
      dateStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateEnd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
