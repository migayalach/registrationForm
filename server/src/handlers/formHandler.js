const SUCCESS = 200;
const ERROR = 400;
const {
  createForm,
  getSearchFormId,
  getSearchFormName,
  searchData,
  getAllForm,
  updateForm,
  delFomr,
} = require("../controllers/formControllers");

const postForm = async (request, response) => {
  const { idUser, idState, idProcedure, equipment, credential } = request.body;
  try {
    const resCreateForm = await createForm(
      idUser,
      idState,
      idProcedure,
      equipment,
      credential
    );
    response.status(SUCCESS).json({ create: true, resCreateForm });
  } catch (error) {
    response.status(ERROR).json({ create: false, error: error.message });
  }
};

const dataSearch = async (request, response) => {
  const { procedure, state, userApi, dateStart, dateEnd } = request.body;
  try {
    const responseForm = await searchData(
      procedure,
      state,
      userApi,
      dateStart,
      dateEnd
    );
    response.status(SUCCESS).json(responseForm);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getFormId = async (request, response) => {
  const { idForm } = request.params;
  try {
    const responseForm = await getSearchFormId(idForm);
    response.status(SUCCESS).json(responseForm);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getFormName = async (request, response) => {
  try {
    const responseForm = await getAllForm();
    response.status(SUCCESS).json(responseForm);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putForm = async (request, response) => {
  const {
    idForm,
    checkForm,
    idUser,
    idState,
    idProcedure,
    credential,
    equipment,
  } = request.body;
  try {
    const updateData = await updateForm(
      idForm,
      checkForm,
      idUser,
      idState,
      idProcedure,
      credential,
      equipment
    );
    response.status(SUCCESS).json({ edit: true, updateData });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteForm = async (request, response) => {
  const { idForm } = request.params;
  try {
    const deletForm = await delFomr(idForm);
    response.status(SUCCESS).json({ delete: true, deletForm });
  } catch (error) {
    response.status(ERROR).json({ delete: false, error: error.message });
  }
};

module.exports = {
  postForm,
  dataSearch,
  getFormId,
  getFormName,
  putForm,
  deleteForm,
};
