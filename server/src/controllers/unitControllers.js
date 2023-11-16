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
  throw Error(`La unidad: ${nameUnit}, ya existe`);
};

const getUnitSearchID = async (idUnit) => {
  const unit = await Unit.findAll({
    where: {
      idUnit,
    },
  });
  if (unit.length > 0) {
    return unit;
  }
  throw Error(`No se pudo encontrar la unidad buscada`);
};

const getUnitSearchName = async (nameUnit) => {
  const nameSearch = await Unit.findAll({
    where: {
      nameUnit: {
        [Op.iLike]: `%${nameUnit}%`,
      },
    },
  });
  return nameSearch;
};

const getAllUnit = async () => await Unit.findAll();

const updateUnit = async (idUnit, nameUnit) => {
  const infoResponse = await Unit.findOne({
    where: {
      idUnit,
    },
  });
  if (infoResponse) {
    const reponseInfo = await Unit.update({ nameUnit }, { where: { idUnit } });
    if (typeof reponseInfo === "object") {
      // return `Unidad: ${nameUnit}, modificado con exito`;
      return getAllUnit();
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
    // return `Se elimino la unidad: ${nameUnit}, correctamente`;
    return getAllUnit();
  }
  throw Error(`No se pudo eliminar la unidad ingresada`);
};

module.exports = {
  createUnit,
  getUnitSearchID,
  getUnitSearchName,
  getAllUnit,
  updateUnit,
  delUnit,
};
