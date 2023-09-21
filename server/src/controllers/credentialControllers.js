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

const updateCredential = async (idCredential, name) => {
  const editCredential = await Credential.findOne({
    where: {
      idCredential,
    },
  });
  if (!editCredential) {
    throw Error(`La credencial: ${name}, no se pudo encontrar`);
  }
  const responseInfo = await Credential.update(
    { name },
    { where: { idCredential } }
  );
  if (typeof responseInfo === "object") {
    return `Credencial: ${name}, modificada con exito`;
  }
};

const getSearchCredentialId = async (idCredential) => {
  const credential = await Credential.findAll({
    where: {
      idCredential,
    },
  });
  if (credential.length > 0) {
    return credential;
  }
  throw Error(`No se pudo encontrar la credencial buscada`);
};

const delCredential = async (idCredential) => {
  const deleteCredential = await Credential.findOne({
    where: { idCredential },
  });
  if (!deleteCredential) {
    throw Error(`La credencial no se encuentra registrada`);
  }
  await Credential.destroy({
    where: { idCredential },
  });
  return `La credencial, se elimino correctamente`;
};

module.exports = {
  createCredential,
  getSearchCredentialId,
  updateCredential,
  delCredential,
};
