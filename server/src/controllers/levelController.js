const { Charges } = require("../database/database");
const { Op } = require("sequelize");

const createLevel = async ({ nameLevel }) => {
  const newLevel = await Charges.findOne({ where: { name: nameLevel } });
  if (!newLevel) {
    return await Charges.create({ name: nameLevel });
  }
  throw Error(`El nivel: ${nameLevel}, ya existe`);
};

const getLevelSearchId = () => {};

const getLevelSearchName = () => {};

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
  updateLevel,
  delLevel,
};
