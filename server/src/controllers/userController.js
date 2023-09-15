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

const updateUser = async (idUser, name, ChargeIdCharges) => {
  const existsUser = await User.findOne({
    where: {
      idUser,
    },
  });
  if (!existsUser) {
    throw Error(`El usuario: ${name} no se encuentra registrado`);
  }
  const existLevel = await Charges.findOne({
    attributes: ["name"],
    where: {
      idCharges: ChargeIdCharges,
    },
  });
  if (!existLevel) {
    throw Error(
      `El nivel de acceso es incorrecto por tanto no se pudo actualizar`
    );
  }
  await User.update({ name, ChargeIdCharges }, { where: { idUser } });
  return { name, charges: existLevel.name };
};

const deleteDataUser = async (idUser) => {
  const { dataValues } = await User.findOne({
    attributes: ["name"],
    where: {
      idUser,
    },
  });
  const deleteUser = await User.destroy({
    where: {
      idUser,
    },
  });
  if (deleteUser === 1) {
    return `Se elimino el usuario: ${dataValues.name}, con exito`;
  }
  throw Error(`No se pudo eliminar el usuario ingresado`);
};

module.exports = {
  createUser,
  updateUser,
  deleteDataUser,
};
