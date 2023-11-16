const { User, Unit, Credential } = require("../database/database");
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
    include: [{ model: Unit, attributes: ["nameUnit"] }, { model: Credential }],
  });

  if (user.Unit.nameUnit === "UTIC") {
    return {
      access: true,
      name: user.nameUser,
      unit: user.Unit.nameUnit,
      credential: "UTIC",
    };
  } else {
    return user
      ? {
          access: true,
          name: user.nameUser,
          unit: user.Unit.nameUnit,
          credential: user.Credential.name,
        }
      : { access: false, message: "Usuario no encontrado" };
  }
};

module.exports = { getLoginData };

// miguel@gmail.com
// holaMundo@1
