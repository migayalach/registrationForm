const { Charges } = require("../database/database");
const { Op } = require("sequelize");

const createLevel = async ({ nameLevel }) => {
  const newLevel = await Charges.findOne({ where: { name: nameLevel } });
  if (!newLevel) {
    return await Charges.create({ name: nameLevel });
  }
  throw Error(`El nivel: ${nameLevel}, ya existe`);
};

const updateLevel = (idCharges, nameLevel) => {
  return { idCharges, nameLevel };
};

module.exports = {
  createLevel,
  updateLevel,
};
