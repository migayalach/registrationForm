const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Form", {
    idForm: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identificationForm: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
