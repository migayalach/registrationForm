const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormCredential",
    {
      checkCredential: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
