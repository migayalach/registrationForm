const {
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  Form,
  FormCredential,
  FormEquipment,
  FormUserApi,
  FormState,
  FormProcedures,
} = require("../database/database");

const { Op } = require("sequelize");
const { clearResponseGet } = require("../utils/formUser");

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

  return await getAllForm();
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
    checkForm: responseForm.checkForm,
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
      {
        model: Procedures,
        attributes: ["name"],
      },
    ],
  });

  return clearResponseGet(responseData);
};

const getSearchFormName = () => {};

const updateForm = async (
  idForm,
  checkForm,
  idUser,
  idState,
  idProcedure,
  credential,
  equipment
) => {
  const form = await Form.findByPk(idForm);
  const user = await UserApi.findByPk(idUser);
  const state = await State.findByPk(idState);
  const procedure = await Procedures.findByPk(idProcedure);

  if (!form || !user || !state || !procedure) {
    throw Error(`No se pudo completar este proceso`);
  }

  if (checkForm) {
    await Form.update(
      { dateEnd: new Date(), checkForm: true },
      { where: { idForm } }
    );
  }

  if (!checkForm) {
    await Form.update(
      { dateEnd: null, checkForm: false },
      { where: { idForm } }
    );
  }

  await FormUserApi.update(
    { UserApiIdUser: idUser },
    { where: { FormIdForm: idForm } }
  );

  await FormState.update(
    { StateIdState: idState },
    { where: { FormIdForm: idForm } }
  );

  await FormProcedures.update(
    { ProcedureIdProcedures: idProcedure },
    { where: { FormIdForm: idForm } }
  );

  //CREDENCIAL
  const resCredential = credential.map(async ({ idCredential, check }) => {
    return FormCredential.update(
      { checkCredential: check },
      { where: { FormIdForm: idForm, CredentialIdCredential: idCredential } }
    );
  });

  //EQUIPMENT
  const resEquipment = equipment.map(
    async ({ idEquipment, host, ip, check }) => {
      return FormEquipment.update(
        { control: check, ip, host },
        { where: { FormIdForm: idForm, EquipmentIdEquipment: idEquipment } }
      );
    }
  );

  await Promise.all(resCredential);
  await Promise.all(resEquipment);

  return await getAllForm();
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

const searchData = async (procedure, state, userApi, dateStart, dateEnd) => {
  const resData = await Form.findAll({
    include: [
      { model: Procedures, attributes: ["name"] },
      { model: State, attributes: ["name"] },
      { model: UserApi, attributes: ["name"] },
    ],
    where: {
      ...(dateStart &&
        dateEnd && {
          dateStart: {
            [Op.between]: [dateStart, dateEnd],
          },
        }),
      ...(procedure && {
        "$Procedures.name$": {
          [Op.iLike]: `%${procedure}%`,
        },
      }),
      ...(userApi && {
        "$UserApis.name$": {
          [Op.iLike]: `%${userApi}%`,
        },
      }),
      ...(state && {
        "$States.name$": {
          [Op.iLike]: `%${state}%`,
        },
      }),
    },
  });

  return resData.length
    ? clearResponseGet(resData)
    : [{ message: `No se encontraron datos` }];
};

module.exports = {
  createForm,
  getSearchFormId,
  getSearchFormName,
  getAllForm,
  updateForm,
  delFomr,
  searchData,
};
