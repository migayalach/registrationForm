const { Credential } = require("../database/database");
const { Op } = require("sequelize");

const createCredential = async (name) => {
  const newCredential = await Credential.findOne({
    where: {
      name,
    },
  });
  if (!newCredential) {
    return await Credential.create({ name });
  }
  throw Error(`La credencial: ${name} no se pudo crear`);
};

module.exports = { createCredential };
