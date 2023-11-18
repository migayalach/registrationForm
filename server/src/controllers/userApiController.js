// 5 de octubre - nuevo
const { UserApi } = require("../database/database");
const { clearResponseOne, dataClear } = require("../utils/userUtils");
const { orderFuc } = require("../utils/toolsFunction");
const URL_API = require("../utils/datUser");

const getAllUserApi = async () => {
  const infoData = await UserApi.count();
  return infoData ? await UserApi.findAll() : await loadingData();
};

const loadingData = async () => {
  const data = await URL_API;
  const aux = dataClear(data);
  return await createUserApi(aux);
};

const createUserApi = async (arrayData) => await UserApi.bulkCreate(arrayData);

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

const orderDataUserApi = async (order) => {
  const resultData = await UserApi.findAll();
  return orderFuc(resultData, order, "name");
};

const getUserApiDataId = async (idUser) => {
  const userInfo = await UserApi.findAll({
    where: {
      idUser,
    },
  });
  if (userInfo.length > 0) {
    return clearResponseOne(userInfo[0].dataValues);
  }
  return await getAllUserApi();
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
  getAllUserApi,
  getUserApiDataId,
  updateUserApi,
  deleteDataUserApi,
  orderDataUserApi,
};
