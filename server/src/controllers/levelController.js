const { Charges } = require("../database/database");
const { Op } = require("sequelize");

const createLevel = async ({ nameLevel }) => {
  const newLevel = await Charges.findOne({ where: { name: nameLevel } });
  if (!newLevel) {
    return await Charges.create({ name: nameLevel });
  }
  throw Error(`El nivel: ${nameLevel}, ya existe`);
};

const getLevelSearchId = async (idCharges) => {
  const level = await Charges.findAll({
    where: {
      idCharges,
    },
  });
  if (level.length > 0) {
    return level;
  }
  throw Error(`No se pudo encontrar el nivel buscado`);
};

const getLevelSearchName = () => {
  return "nombre";
};

const getAllLevel = async () => await Charges.findAll();

const updateLevel = async (idCharges, nameLevel) => {
  const infoResponse = await Charges.findOne({
    where: {
      idCharges,
    },
  });
  if (infoResponse) {
    const reponseInfo = await Charges.update(
      { name: nameLevel },
      { where: { idCharges } }
    );
    if (typeof reponseInfo === "object") {
      return `Modificado con exito a nivel: ${nameLevel}`;
    }
  }
  throw Error(`El nivel: ${nameLevel}, no se pudo encontrar`);
};

const delLevel = async (idCharges) => {
  const deleteLevel = await Charges.findOne({ where: { idCharges } });
  if (!deleteLevel) {
    throw Error(`El nivel no se encuentra registrado`);
  }
  await Charges.destroy({
    where: {
      idCharges,
    },
  });
  return `El nivel, se elimino correctamente`;
};

module.exports = {
  createLevel,
  getLevelSearchId,
  getLevelSearchName,
  getAllLevel,
  updateLevel,
  delLevel,
};
