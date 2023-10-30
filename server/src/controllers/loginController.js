const { User } = require("../database/database");
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
  });

  return user
    ? { access: true, message: `Bienvenid@: ${user.nameUser}` }
    : { access: false, message: "Usuario no encontrado" };
};

module.exports = { getLoginData };
