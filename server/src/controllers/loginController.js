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

  if (user) {
    if (user.Unit.nameUnit === "UTIC") {
      return {
        access: true,
        name: user.nameUser,
        unit: user.Unit.nameUnit,
        credential: "UTIC",
      };
    } else {
      return {
        access: true,
        name: user.nameUser,
        unit: user.Unit.nameUnit,
        credential: user.Credential.name,
      };
    }
  }
  throw Error("Usuario no encontrado");
};

module.exports = { getLoginData };
