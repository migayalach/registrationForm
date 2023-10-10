const { Credential, User } = require("../database/database");
const { getUnitSearchID } = require("./unitControllers");
const { Op } = require("sequelize");

const createCredential = async (name, UserIdUser) => {
  // const newCredential = await Credential.findOne({
  //   where: {
  //     name,
  //   },
  // });
  // if (!newCredential) {
  //   return await Credential.create({ name });
  // }
  // throw Error(`La credencial: ${name} no se pudo crear`);
  await Credential.create({ name, UserIdUser });
  return await getSearchCategoryName(name);
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
    return `Credencial: ${name}, modificada con exito`;
  }
};

const getSearchCredentialId = async (idCredential) => {
  // const credential = await Credential.findAll({
  //   where: {
  //     idCredential,
  //   },
  // });
  // if (credential.length > 0) {
  //   return credential;
  // }
  // throw Error(`No se pudo encontrar la credencial buscada`);
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

const getSearchCategoryName = async (name) => {
  const nameSearch = await Credential.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    // include: [
    //   {
    //     model: User,
    //     attributes: ["nameUser", "UnitIdUnit"],
    //   },
    // ],
  });
  return nameSearch;
};

// const getAllCredential = async () => {
//   const x = await Credential.findAll({
//     include: [{ model: User }],
//   });
//   const aux = x.map(
//     ({
//       idCredential,
//       name,
//       UserIdUser,
//       User: { idUser },
//       User: { nameUser },
//       User: { emailUser },
//       User: { user },
//       User: { UnitIdUnit },
//     }) => ({
//       idCredential,
//       name,
//       UserIdUser,
//       idUser,
//       nameUser,
//       emailUser,
//       user,
//       UnitIdUnit,
//     })
//   );

//   return aux;
// };

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
  return `La credencial, se elimino correctamente`;
};

module.exports = {
  createCredential,
  getSearchCredentialId,
  getSearchCategoryName,
  getAllCredential,
  updateCredential,
  delCredential,
};
