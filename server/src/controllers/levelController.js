const { Charges } = require("../database/database");
const { Op } = require("sequelize");

const createLevel = async ({ nameLevel }) => {
  const newLevel = await Charges.findOne({ where: { name: nameLevel } });
  if (!newLevel) {
    return await Charges.create({ name: nameLevel });
  }
  throw Error(`El nivel: ${nameLevel}, ya existe`);
};

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

module.exports = {
  createLevel,
  updateLevel,
};
