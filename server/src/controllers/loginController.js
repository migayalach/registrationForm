const { User, Unit, Credential } = require("../database/database");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const getLoginData = async (emailUser, password) => {
  const user = await User.findOne({
    attributes: ["idUser", "nameUser", "password"],
    where: {
      emailUser: { [Op.like]: `%${emailUser}%` },
    },
    include: [{ model: Unit, attributes: ["nameUnit"] }, { model: Credential }],
  });

  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      if (user.Unit.nameUnit === "UTIC") {
        return {
          access: true,
          idUser: user.idUser,
          name: user.nameUser,
          unit: user.Unit.nameUnit,
          credential: "UTIC",
        };
      } else {
        return {
          access: true,
          idUser: user.idUser,
          name: user.nameUser,
          unit: user.Unit.nameUnit,
          credential: user.Credential.name,
        };
      }
    }
  }

  throw Error("Usuario no encontrado o contraseña incorrecta");
};

module.exports = { getLoginData };
