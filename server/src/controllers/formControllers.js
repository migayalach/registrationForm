const {
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  Form,
  FormCredential,
  FormEquipment,
} = require("../database/database");

const { Op } = require("sequelize");
const { nameClear } = require("../utils/formUser");

const createForm = async (
  idUser,
  idState,
  idProcedure,
  equipment,
  credential
) => {
  const createProcedure = await Procedures.findByPk(idProcedure);
  const createUserApi = await UserApi.findByPk(idUser);
  const createState = await State.findByPk(idState);
  const createCredential = await Promise.all(
    credential.map(async ({ idCredential }) => {
      return await Credential.findByPk(idCredential);
    })
  );
  const createEquipment = await Promise.all(
    equipment.map(async ({ idEquipment }) => {
      return await Equipment.findByPk(idEquipment);
    })
  );

  if (
    !createProcedure ||
    !createUserApi ||
    !createState ||
    !createEquipment.length ||
    !createCredential.length
  ) {
    throw Error(`Faltan datos`);
  }

  const createForm = await Form.create({ dateStart: new Date() });
  await createForm.addUserApi(idUser);
  await createForm.addState(idState);
  await createForm.addProcedures(idProcedure);
  await Promise.all(
    credential.map(async ({ idCredential, check, id }) => {
      return await createForm.addCredential(idCredential, {
        through: {
          checkCredential: check,
          idUnique: id,
        },
      });
    })
  );
  await Promise.all(
    equipment.map(async ({ idEquipment, host, ip, check, id }) => {
      return createForm.addEquipment(idEquipment, {
        through: {
          host,
          ip,
          control: check,
          idUnique: id,
        },
      });
    })
  );

  return getAllForm();
};

const getSearchFormId = async (idForm) => {
  const responseForm = await Form.findOne({
    where: { idForm },
    include: [
      {
        model: Equipment,
      },
      {
        model: UserApi,
      },
      {
        model: State,
      },
      {
        model: Procedures,
      },
      {
        model: Credential,
      },
    ],
  });

  const credential = responseForm.Credentials.map(
    ({
      idCredential,
      UserIdUser,
      name,
      FormCredential: checkCredential,
      FormCredential: idUnique,
    }) => ({
      idCredential,
      UserIdUser,
      credencial: name,
      check: checkCredential.checkCredential,
      id: idUnique.idUnique,
    })
  );

  const equipment = responseForm.Equipment.map(
    ({ idEquipment, name, FormEquipment }) => ({
      idEquipment,
      equipo: name,
      check: FormEquipment.control,
      ip: FormEquipment.ip,
      host: FormEquipment.host,
      id: FormEquipment.idUnique,
    })
  );

  return {
    idForm: responseForm.idForm,
    dateStart: responseForm.dateStart,
    dateEnd: responseForm.dateEnd,
    idState: responseForm.States[0].idState,
    idUser: responseForm.UserApis[0].idUser,
    idProcedure: responseForm.Procedures[0].idProcedures,
    credential,
    equipment,
  };
};

const getAllForm = async () => {
  const responseData = await Form.findAll({
    include: [
      {
        model: State,
        attributes: ["name"],
      },
      {
        model: UserApi,
        attributes: ["name"],
      },
    ],
  });

  const formsData = responseData.map((form) => ({
    idForm: form.idForm,
    dateStart: form.dateStart,
    procedures: form.States.name,
    nameUser: nameClear(form.UserApis.map(({ name }) => name)),
  }));

  return formsData;
};

const getSearchFormName = () => {};

const updateForm = async (
  idForm,
  idUser,
  idState,
  idProcedures,
  credential, //OK
  equipment
) => {
  const form = await Form.findByPk(idForm);
  const user = await UserApi.findByPk(idUser);
  const state = await State.findByPk(idState);
  const procedure = await Procedures.findByPk(idProcedures);

  if (!form || !user || !state || !procedure) {
    throw Error(`No se pudo completar este proceso`);
  }

  // EQUIPO
  // 1.- VER SI SON LOS MISMOS DATOS
  // 2.- SI SON LOS MISMOS DATOS NO HACER NADA
  // 3.- SI NO SON LOS MISMOS DATOS EN UNO O AMBOS EDITAR EL QUE HAYA QUE EDITAR

  // // TRAER DE LA BASE DE DATOS LO QUE HAY
  // const equipmentBdd = await FormEquipment.findAll({
  //   attributes: ["control", "dataP", "dataHos", "EquipmentIdEquipment"],
  //   where: { FormIdForm: idForm },
  // });

  // console.log(equipmentBdd[0].dataValues);
  // console.log("************************");
  // console.log(equipmentBdd[1].dataValues);
  // console.log("************************");
  // console.log(equipment[0]);
  // console.log("************************");
  // console.log(equipment[1]);
  // // const igual = equipmentBdd.fine(
  // //   ({ control, dataP, dataHos, EquipmentIdEquipment }) => {}
  // // );

  //CREDENCIAL
  const resCredential = credential.map(async ({ idCredential, check }) => {
    return FormCredential.update(
      { checkCredential: check },
      { where: { FormIdForm: idForm, CredentialIdCredential: idCredential } }
    );
  });

  await Promise.all(resCredential);

  return;
};

const delFomr = async (idForm) => {
  const deleteForm = await Form.findOne({ where: { idForm } });
  if (!deleteForm) {
    throw Error(`El formulario buscado no se encuentra entre los registros`);
  }
  await Form.destroy({
    where: { idForm },
  });
  return await getAllForm();
};

module.exports = {
  createForm,
  getSearchFormId,
  getSearchFormName,
  getAllForm,
  updateForm,
  delFomr,
};

//ahora sigue get
