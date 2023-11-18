const { Credential, User } = require("../database/database");
const { getUnitSearchID } = require("./unitControllers");
const { orderFuc, clearDataUser } = require("../utils/toolsFunction");
const { Op } = require("sequelize");

const createCredential = async (name, UserIdUser) => {
  await Credential.create({ name, UserIdUser });
  return await getAllCredential();
};

const updateCredential = async (idCredential, name) => {
  const editCredential = await Credential.findOne({
    where: {
      idCredential,
    },
  });
  if (!editCredential) {
    throw Error(`La credencial: ${name}, no se pudo encontrar`);
  }
  const responseInfo = await Credential.update(
    { name },
    { where: { idCredential } }
  );
  if (typeof responseInfo === "object") {
    return await getAllCredential();
  }
};

const getSearchCredentialId = async (idCredential) => {
  return await Credential.findOne({
    where: { idCredential },
    include: [
      {
        model: User,
        attributes: ["nameUser"],
      },
    ],
  });
};

const getSearchCategoryName = async (nameUser, name, order) => {
  const nameSearch = await Credential.findAll({
    include: { model: User },
    where: {
      ...(name && {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      }),
      ...(nameUser && {
        "$User.nameUser$": {
          [Op.iLike]: `%${nameUser}%`,
        },
      }),
    },
  });

  if (order && !nameUser) {
    return orderFuc(clearDataUser(nameSearch), order);
  }

  if (nameSearch.length > 0) {
    return clearDataUser(nameSearch);
  }
  throw Error`No se encontro lo que busca`;
};

const getAllCredential = async () => {
  const responseData = await Credential.findAll({
    include: [{ model: User }],
  });
  return await Promise.all(
    responseData.map(
      async ({
        idCredential,
        name,
        UserIdUser,
        User: { idUser },
        User: { nameUser },
        User: { emailUser },
        User: { user },
        User: { UnitIdUnit },
      }) => ({
        idCredential,
        name,
        UserIdUser,
        idUser,
        nameUser,
        emailUser,
        user,
        UnitIdUnit: (
          await getUnitSearchID(UnitIdUnit)
        ).map(({ idUnit, nameUnit }) => ({ idUnit, nameUnit })),
      })
    )
  );
};

const delCredential = async (idCredential) => {
  const deleteCredential = await Credential.findOne({
    where: { idCredential },
  });
  if (!deleteCredential) {
    throw Error(`La credencial no se encuentra registrada`);
  }
  await Credential.destroy({
    where: { idCredential },
  });
  return await getAllCredential();
};

module.exports = {
  createCredential,
  getSearchCredentialId,
  getSearchCategoryName,
  getAllCredential,
  updateCredential,
  delCredential,
};
