const { User, Unit } = require("../database/database");
const { Op } = require("sequelize");

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
  return {
    idUser,
    nameUser: dataClear.nameUser,
    emailUser: dataClear.emailUser,
    user: dataClear.user,
    password: dataClear.password,
    UnitIdUnit: dataClear.idArea,
    nameUnit,
  };
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

const getNameUser = async (name, nameUnit, order) => {
  const userData = await User.findAll({
    include: { model: Unit, attributes: ["nameUnit"] },
    where: {
      ...(name && {
        nameUser: {
          [Op.iLike]: `%${name}%`,
        },
      }),
      ...(nameUnit && {
        "$Unit.nameUnit$": {
          [Op.iLike]: `%${nameUnit}%`,
        },
      }),
    },
    order: [[order === "DESC" ? "nameUser" : "nameUser", order]],
  });

  if (userData.length > 0) {
    return userData;
  }
  await getAllUser();
  throw Error`No se encontro lo que busca`;
};

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
    throw Error(`El usuario: ${nameUser} no se encuentra registrado`);
  }

  await User.update(
    {
      nameUser,
      emailUser,
      user,
      password,
      UnitIdUnit: idArea,
    },
    { where: { idUser } }
  );
  return await getAllUser();
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
      return await getAllUser();
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
