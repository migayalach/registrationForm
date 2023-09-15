const { User, Charges } = require("../database/database");
const { Op } = require("sequelize");

const createUser = async (name, ChargeIdCharges) => {
  const existsPosition = await Charges.findOne({
    where: {
      idCharges: ChargeIdCharges,
    },
  });
  if (existsPosition) {
    return await User.create({ name, ChargeIdCharges });
  }
  throw Error(`El nivel de acceso no existe`);
};

module.exports = {
  createUser,
};
