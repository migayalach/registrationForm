const { User, Unit } = require("../database/database");
const { Op } = require("sequelize");

const getLoginData = async (emailUser, password) => {
  const user = await User.findOne({
    attributes: ["nameUser"],
    where: {
      [Op.and]: [
        {
          emailUser: { [Op.like]: `%${emailUser}%` },
        },
        {
          password: { [Op.like]: `%${password}%` },
        },
      ],
    },
    include: [{ model: Unit, attributes: ["nameUnit"] }],
  });

  return user
    ? { access: true, name: user.nameUser, unit: user.Unit.nameUnit }
    : { access: false, message: "Usuario no encontrado" };
};

module.exports = { getLoginData };
