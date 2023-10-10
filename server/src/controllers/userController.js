const { User, Unit } = require("../database/database");
const { Op } = require("sequelize");
const {
  clearResponseOne,
  clearData,
  duplicateInfo,
} = require("../utils/userUtils");

const newObj = (data, params) => {
  data = { ...data, params };
  return data;
};

const createUser = async (nameUser, emailUser, user, password, idArea) => {
  const existArea = await Unit.findOne({
    where: {
      idUnit: idArea,
    },
  });
  if (!existArea) {
    throw Error(`El área que ustede selecciono no existe`);
  }
  const { nameUnit } = await Unit.findOne({
    where: {
      idUnit: idArea,
    },
    attributes: ["nameUnit"],
  });

  const dataClear = await User.create({
    nameUser,
    emailUser,
    user,
    password,
    UnitIdUnit: idArea,
  });

  const { idUser } = await User.findOne({ where: { emailUser } });
  // const unit = await Unit.findOne({
  //   where: { idUnit: idArea },
  //   attibutes: ["nameUnit"],
  // });
  // console.log(unit.dataValues.nameUnit);

  return {
    idUser,
    nameUser: dataClear.nameUser,
    emailUser: dataClear.emailUser,
    user: dataClear.user,
    password: dataClear.password,
    UnitIdUnit: dataClear.idArea,
    nameUnit,
  };
  // return { nameUser, emailUser, user, password };
  // throw Error(`El usuario: ${existsUser.name}, ya existe`);
};

const getUserDataId = async (idUser) => {
  const userInfo = await User.findAll({
    where: {
      idUser,
    },
    include: {
      model: Unit,
      attributes: ["nameUnit"],
    },
  });
  if (userInfo.length > 0) {
    // return clearResponseOne(userInfo[0].dataValues);
    return userInfo;
  }
  return await getAllUser();
};

const getAllUser = async () => {
  const responseUser = await User.findAll({
    include: { model: Unit, attributes: ["nameUnit"] },
    order: [["idUser", "ASC"]],
  });
  return responseUser.map(
    ({
      idUser,
      nameUser,
      emailUser,
      user,
      password,
      UnitIdUnit,
      Unit: { nameUnit },
    }) => ({
      idUser,
      nameUser,
      emailUser,
      user,
      password,
      UnitIdUnit,
      nameUnit,
    })
  );
};

const getNameUser = async (name) => {
  const userData = await User.findAll({
    where: {
      nameUser: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: { model: Unit, attibutes: ["nameUnit"] },
  });
  if (userData.length > 0) {
    return userData;
  }
  return await getAllUser();
};

//falta update
const updateUser = async (
  idUser,
  nameUser,
  emailUser,
  user,
  password,
  idArea
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
      dataValues: { nameUser },
    } = await User.findOne({
      attributes: ["nameUser"],
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
      return `Se elimino el usuario: ${nameUser}, con exito`;
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
