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
  const userData = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    // include: { model: Charges, attibutes: ["name"] },
  });
  return userData;
};

const clearData = (dataDuplicate) =>
  (newDataObj = {
    name: dataDuplicate.name,
    nroIdentification: dataDuplicate.nroIdentification,
    email: dataDuplicate.email,
    phone: dataDuplicate.phone,
    charge: dataDuplicate.charge,
  });

const updateUser = async (
  idUser,
  name,
  nroIdentification,
  email,
  phone,
  charge
) => {
  const existsUser = await User.findOne({
    where: {
      idUser,
    },
  });
  if (!existsUser) {
    throw Error(`El usuario: ${name} no se encuentra registrado`);
  }
  //VERIFICAR SI HAY ALGUN DUPLICADO;
  const dataDuplicateBdd = await getUserDataId(idUser);
  const dataDuplicate = clearData(dataDuplicateBdd);
  const dataInput = {
    idUser,
    name,
    nroIdentification,
    email,
    phone,
    charge,
  };
  // for (const j in dataDuplicate) {
  //   console.log(dataDuplicate[j]);
  //   for (const i in dataInput){

  //   }
  // }

  await User.update(
    { name, nroIdentification, email, phone, charge },
    { where: { idUser } }
  );
  return await getUserDataId(idUser);
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
