const { Sequelize } = require("sequelize");
require("dotenv").config();
const unitModel = require("../models/Unit");
const subUnitModel = require("../models/SubUnidad");
const userModel = require("../models/User");
const chargesModel = require("../models/Charges");
const categoryModel = require("../models/Category");
const equipmentModel = require("../models/Equipment");
const credentialModel = require("../models/Credential");
const formModel = require("../models/Form");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

unitModel(sequelize);
subUnitModel(sequelize);
userModel(sequelize);
chargesModel(sequelize);
categoryModel(sequelize);
equipmentModel(sequelize);
credentialModel(sequelize);
formModel(sequelize);

const { Unit, SubUnit, User, Charges, Category, Equipment, Credential, Form } =
  sequelize.models;
Unit.hasOne(SubUnit);
SubUnit.belongsTo(Unit);
Charges.hasMany(User);
User.belongsTo(Charges);
Category.hasMany(Equipment);
Equipment.belongsTo(Category);
Credential.belongsToMany(Form, { through: "FormCredential" });
Form.belongsToMany(Credential, { through: "FormCredential" });
User.belongsToMany(Form, { through: "UserForm" });
Form.belongsToMany(User, { through: "UserForm" });
// Form.hasMany(Category);
// Category.belongsTo(Form);

module.exports = { sequelize, ...sequelize.models };
