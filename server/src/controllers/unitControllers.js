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

const delUnit = async (idUnit) => {
  const unitData = await Unit.findOne({
    attributes: ["nameUnit"],
    where: {
      idUnit,
    },
  });
  const deleteUnit = await Unit.destroy({
    where: {
      idUnit,
    },
  });
  if (deleteUnit === 1) {
    const { nameUnit } = unitData;
    return `Se elimino la unidad: ${nameUnit}, correctamente`;
  }
  throw Error(`No se pudo eliminar la unidad ingresada`);
};

module.exports = {
  createUnit,
  updateUnit,
  delUnit,
};
