const { UserApi } = require("../database/database");
const { Op } = require("sequelize");
const {
  clearResponseOne,
  clearData,
  duplicateInfo,
} = require("../utils/userUtils");

const createUserApi = async (name, nroIdentification, email, phone, charge) => {
  // ACTIVAR CON REACT
  // const amoutUser = await UserApi.count();
  // if (amoutUser === 0) {
  //   throw Error(`La base de datos se encuentra vacia y cargaremos datos`);
  // }
  const existsUserApi = await UserApi.findOne({
    attributes: ["name"],
    where: {
      nroIdentification,
    },
  });
  if (!existsUserApi) {
    await UserApi.create({ name, nroIdentification, email, phone, charge });
    return { name, nroIdentification, email, phone, charge };
  }
  throw Error(`El usuario: ${existsUserApi.name}, ya existe`);
};

const getUserApiDataId = async (idUser) => {
  const userInfo = await UserApi.findAll({
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
  return await getAllUserApi();
};

const getAllUserApi = async () => await UserApi.findAll();

const getNameUserApi = async (name) => {
  const userData = await UserApi.findAll({
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
  return await getAllUserApi();
};

const updateUserApi = async (
  idUser,
  name,
  nroIdentification,
  email,
  phone,
  charge
) => {
  const existsUser = await UserApi.findOne({
    where: {
      idUser,
    },
  });
  if (!existsUser) {
    throw Error(`El usuario: ${name} no se encuentra registrado`);
  }

  const dataDuplicateBdd = await getAllUserApi();
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
  await UserApi.update(
    {
      name,
      nroIdentification: parseInt(nroIdentification),
      email,
      phone,
      charge,
    },
    { where: { idUser } }
  );
  return await getUserApiDataId(idUser);
};

const deleteDataUserApi = async (idUser) => {
  const existsUser = await UserApi.findOne({
    where: { idUser },
  });
  if (existsUser) {
    const {
      dataValues: { name },
    } = await UserApi.findOne({
      attributes: ["name"],
      where: {
        idUser,
      },
    });
    const deleteUser = await UserApi.destroy({
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
  createUserApi,
  getUserApiDataId,
  getAllUserApi,
  getNameUserApi,
  updateUserApi,
  deleteDataUserApi,
};
