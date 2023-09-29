const { Sequelize } = require("sequelize");
require("dotenv").config();
const userApiModel = require("../models/UserApi");
const equipmentModel = require("../models/Equipment");
const stateModel = require("../models/State");
const proceduresModel = require("../models/Procedures");
const unitModel = require("../models/Unit");
const userModel = require("../models/User");

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
userModel(sequelize);
userApiModel(sequelize);
proceduresModel(sequelize);
stateModel(sequelize);
equipmentModel(sequelize);
credentialModel(sequelize);
formModel(sequelize);

const { Unit, User, UserApi, Procedures, State, Equipment, Credential, Form } =
  sequelize.models;

Unit.hasOne(User);
User.belongsTo(Unit);

User.hasOne(Credential);
Credential.belongsTo(User);

Form.belongsToMany(Credential, { through: "FormCredential" });
Form.belongsToMany(Equipment, { through: "FormEquipment" });
Form.belongsToMany(UserApi, { through: "FormUserApi" });
Form.belongsToMany(State, { through: "FormState" });
Form.belongsToMany(Procedures, { through: "FormProcedures" });

module.exports = { sequelize, ...sequelize.models };
