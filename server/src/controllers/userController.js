const { User } = require("../database/database");
const { Op } = require("sequelize");
const {
  clearResponseOne,
  clearData,
  duplicateInfo,
} = require("../utils/userUtils");

const createUser = async (name, nroIdentification, email, phone, charge) => {
  const existsUser = await User.findOne({
    attributes: ["name"],
    where: {
      nroIdentification,
    },
  });
  if (!existsUser) {
    await User.create({ name, nroIdentification, email, phone, charge });
    return { name, nroIdentification, email, phone, charge };
  }
  throw Error(`El usuario: ${existsUser.name}, ya existe`);
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
  if (userData.length > 0) {
    return userData;
  }
  return await getAllUser();
};

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

  const dataDuplicateBdd = await getAllUser();
  const dataUserFind = dataDuplicateBdd
    .map(({ dataValues }) => dataValues)
    .filter((dataValues) => dataValues.idUser !== +idUser)
    .find(
      (dataValues) =>
        dataValues.nroIdentification === +nroIdentification ||
        dataValues.email === email
    );

  if (dataUserFind) {
    throw Error(
      `No se permiten datos duplicados, por favor verifique y cambie los items`
    );
  }
  await User.update(
    {
      name,
      nroIdentification: parseInt(nroIdentification),
      email,
      phone,
      charge,
    },
    { where: { idUser } }
  );
  return await getUserDataId(idUser);
};

const deleteDataUser = async (idUser) => {
  const existsUser = await User.findOne({
    where: { idUser },
  });
  if (existsUser) {
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
  }
  throw Error(`El usuario ingresado no existe`);
};

module.exports = {
  createUser,
  getUserDataId,
  getAllUser,
  getNameUser,
  updateUser,
  deleteDataUser,
};
