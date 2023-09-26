const { User } = require("../database/database");
const { Op } = require("sequelize");
const { clearResponseOne } = require("../utils/userUtils");

const createUser = async (name, nroIdentification, email, phone, charge) => {
  const amoutUser = await User.count();
  if (amoutUser === 0) {
    throw Error(`La base de datos se encuentra vacia y cargaremos datos`);
  }
  const existsUser = await User.findOne({
    attributes: ["name"],
    where: {
      nroIdentification,
    },
  });
  if (existsUser) {
    throw Error(`El usuario: ${existsUser.name}, ya existe`);
  }
  await User.create({ name, nroIdentification, email, phone, charge });
  return { name, nroIdentification, email, phone, charge };
};

const getUserDataId = async (idUser) => {
  const userInfo = await User.findAll({
    where: {
      idUser,
    },
    // include: {
    //   model: Charges,
    //   attributes: ["name"],
    // },
  });
  if (userInfo.length > 0) {
    return clearResponseOne(userInfo[0].dataValues);
  }
  return await getAllUser();
};

const getAllUser = async () => await User.findAll();

const getNameUser = async (name) => {
  const userData = await User.findOne({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    // include: { model: Charges, attibutes: ["name"] },
  });
  return clearResponseOne(userData);
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
  getAllUser,
  getNameUser,
  updateUser,
  deleteDataUser,
};
