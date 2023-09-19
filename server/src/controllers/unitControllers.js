const { Unit } = require("../database/database");
const { Op } = require("sequelize");

const createUnit = async ({ nameUnit }) => {
  const newUnit = await Unit.findOne({
    where: {
      nameUnit,
    },
  });
  if (!newUnit) {
    return await Unit.create({ nameUnit });
  }
  throw Error(`La unidad: ${nameUnit}, existe`);
};

const updateUnit = async (idUnit, nameUnit) => {
  const infoResponse = await Unit.findOne({
    where: {
      idUnit,
    },
  });
  if (infoResponse) {
    const reponseInfo = await Unit.update({ nameUnit }, { where: { idUnit } });
    if (typeof reponseInfo === "object") {
      return `Unidad: ${nameUnit}, modificado con exito`;
    }
  }
  throw Error(`La unidad: ${nameUnit}, no se pudo encontrar`);
};

module.exports = {
  createUnit,
  updateUnit,
};
