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

const clearResponseOne = ({ idUser, name, Charge: { dataValues } }) => ({
  idUser,
  name,
  levelUser: dataValues.name,
});

const getUserDataId = async (idUser) => {
  const userInfo = await User.findAll({
    where: {
      idUser,
    },
    include: {
      model: Charges,
      attributes: ["name"],
    },
  });
  if (userInfo.length > 0) {
    return clearResponseOne(userInfo[0].dataValues);
  }
  return await getAll();
};

const getAll = async () => {
  return "Traer todo";
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
  const {
    dataValues: { name },
  } = await User.findOne({
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
    return `Se elimino el usuario: ${name}, con exito`;
  }
  throw Error(`No se pudo eliminar el usuario ingresado`);
};

module.exports = {
  createUser,
  getUserDataId,
  updateUser,
  deleteDataUser,
};
