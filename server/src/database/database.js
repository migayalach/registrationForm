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
const formEquipment = require("../models/FormEquipment");
const formCredential = require("../models/FormCredential");

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
formEquipment(sequelize);
formCredential(sequelize);

const {
  Unit,
  User,
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  Form,
  FormEquipment,
  FormCredential,
} = sequelize.models;

Unit.hasOne(User);
User.belongsTo(Unit);

User.hasOne(Credential);
Credential.belongsTo(User);

Form.belongsToMany(
  Credential,
  { through: FormCredential },
  {
    timestamps: false,
  }
);
Credential.belongsToMany(Form, {
  through: FormCredential,
  timestamps: false,
});

Equipment.belongsToMany(Form, {
  through: FormEquipment,
  timestamps: false,
});
Form.belongsToMany(Equipment, {
  through: FormEquipment,
  timestamps: false,
});

Form.belongsToMany(UserApi, { through: "FormUserApi", timestamps: false });
UserApi.belongsToMany(Form, { through: "FormUserApi", timestamps: false });
Form.belongsToMany(State, { through: "FormState", timestamps: false });
State.belongsToMany(Form, { through: "FormState", timestamps: false });
Form.belongsToMany(Procedures, {
  through: "FormProcedures",
  timestamps: false,
});
Procedures.belongsToMany(Form, {
  through: "FormProcedures",
  timestamps: false,
});

module.exports = { sequelize, ...sequelize.models };
