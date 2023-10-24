const {
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  Form,
} = require("../database/database");

const { Op } = require("sequelize");
const { nameClear } = require("../utils/formUser");

const createForm = async (
  idUser,
  idState,
  nameProcedures,
  equipment,
  credential
) => {
  const { idProcedures } = await Procedures.findOne({
    where: {
      name: {
        [Op.iLike]: `${nameProcedures}`,
      },
    },
  });
  if (!idProcedures) {
    throw Error(`No existe este procedimiento`);
  }

  const createUserApi = await UserApi.findByPk(idUser);
  const createState = await State.findByPk(idState);
  const procedures = await Procedures.findByPk(idProcedures);
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
    !procedures ||
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
  await createForm.addProcedures(idProcedures);

  // CREAR
  await Promise.all(
    credential.map(async ({ idCredential }) => {
      return await createForm.addCredential(idCredential);
    })
  );

  await Promise.all(
    equipment.map(async ({ idEquipment, dataHos, dataP, etiquetaControl }) => {
      return createForm.addEquipment(idEquipment, {
        through: {
          dataHos: dataHos,
          dataP: dataP,
          control: etiquetaControl,
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
    ({ idCredential, UserIdUser, FormCredential: checkCredential }) => ({
      idCredential,
      UserIdUser,
      checkCredential: checkCredential.checkCredential,
    })
  );

  const equipment = responseForm.Equipment.map(
    ({ idEquipment, name, FormEquipment }) => ({
      idEquipment,
      name,
      control: FormEquipment.control,
      dataP: FormEquipment.dataP,
      dataHos: FormEquipment.dataHos,
    })
  );

  const state = responseForm.States.map(({ idState, name }) => ({
    idState,
    name,
  }));

  const userApi = responseForm.UserApis.map(
    ({ idUser, name, nroIdentification, charge }) => ({
      idUser,
      name,
      nroIdentification,
      charge,
    })
  );

  const procedures = responseForm.Procedures.map(({ idProcedures, name }) => ({
    idProcedures,
    name,
  }));

  return {
    idForm: responseForm.idForm,
    dateStart: responseForm.dateStart,
    dateEnd: responseForm.dateEnd,
    state,
    userApi,
    procedures,
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

const updateForm = () => {};

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
