const { Unit, SubUnit } = require("../database/database");
const { Op } = require("sequelize");

const createSubUnit = async (nameSubUnit, UnitIdUnit) => {
  const existSubUnit = await Unit.findOne({
    where: {
      idUnit: UnitIdUnit,
    },
  });
  if (existSubUnit) {
    const subUnit = await Unit.findOne({
      attibutes: ["nameUnit"],
      where: {
        idUnit: UnitIdUnit,
      },
    });
    const nameSubUnit = subUnit.dataValues.nameUnit;
    return await SubUnit.create({ nameSubUnit, UnitIdUnit });
  }
  throw Error(`La SubUnidad no existe`);
};

const getSubUnitDataId = async (idSubUnit) => {
  const subUnitInfo = await SubUnit.findAll({
    where: {
      idSubUnit,
    },
    include: {
      model: Unit,
      attibutes: ["nameUnit"],
    },
  });
  if (subUnitInfo.length > 0) {
    return subUnitInfo;
  }
  return await getAllSubUnit();
};

const getNameSubUnit = async (nameSubUnit) => {
  const subUnit = await SubUnit.findOne({
    where: {
      nameSubUnit: {
        [Op.iLike]: `%${nameSubUnit}%`,
      },
    },
    include: { model: Unit, attibutes: ["nameUnit"] },
  });
  return subUnit;
};

const getAllSubUnit = async () =>
  await SubUnit.findAll({
    include: { model: Unit, attibutes: ["nameUnit"] },
  });

const updateSubUnit = async (idSubUnit, nameSubUnit, UnitIdUnit) => {
  const existSubUnit = await SubUnit.findOne({
    where: {
      idSubUnit,
    },
  });
  if (!existSubUnit) {
    throw Error(`La Sub unidad: ${nameSubUnit} no se encuentra registrada`);
  }
  const existUnit = await Unit.findOne({
    attibutes: ["nameUnit"],
    where: {
      idUnit: UnitIdUnit,
    },
  });
  if (!existUnit) {
    throw Error(`La unidad no existe, por tanto no se pudo actualizar`);
  }
  await SubUnit.update({ nameSubUnit, UnitIdUnit }, { where: { idSubUnit } });
  return { name: nameSubUnit, subUnidad: existSubUnit.nameUnit };
};

const deleteDataSubUnit = async (idSubUnit) => {
  const response = await SubUnit.findOne({
    attibutes: ["nameSubUnit"],
    where: {
      idSubUnit,
    },
  });

  const deleteSubUnit = await SubUnit.destroy({
    where: {
      idSubUnit,
    },
  });

  if (deleteSubUnit === 1) {
    return `Se elimino la subUnidad: ${response.nameSubUnit}, con exito`;
  }
  throw Error(`No se pudo eliminar la subUnidad`);
};

module.exports = {
  createSubUnit,
  getSubUnitDataId,
  getNameSubUnit,
  getAllSubUnit,
  updateSubUnit,
  deleteDataSubUnit,
};
