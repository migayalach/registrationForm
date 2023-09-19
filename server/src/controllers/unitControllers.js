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

module.exports = {
  createUnit,
};
