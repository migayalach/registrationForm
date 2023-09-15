const { User, Charges } = require("../database/database");
const { Op } = require("sequelize");

const createUser = async (name, ChargeIdCharges) => {
  const existsPosition = await Charges.findOne({
    where: {
      idCharges: ChargeIdCharges,
    },
  });
  if (existsPosition) {
    const level = await Charges.findOne({
      attibutes: ["name"],
      where: {
        idCharges: ChargeIdCharges,
      },
    });
    const nameLevel = level.dataValues.name;
    await User.create({ name, ChargeIdCharges });
    return { name, nameLevel };
  }
  throw Error(`El nivel de acceso no existe`);
};

module.exports = {
  createUser,
};
