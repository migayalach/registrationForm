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

module.exports = { createSubUnit };
