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

module.exports = { createSubUnit, updateSubUnit };
