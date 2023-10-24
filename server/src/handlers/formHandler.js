const SUCCESS = 200;
const ERROR = 400;
const {
  createForm,
  getSearchFormId,
  getSearchFormName,
  getAllForm,
  updateForm,
  delFomr,
} = require("../controllers/formControllers");

const postForm = async (request, response) => {
  const { idUser, idState, nameProcedures, equipment, credential } =
    request.body;
  try {
    const resCreateForm = await createForm(
      idUser,
      idState,
      nameProcedures,
      equipment,
      credential
    );
    response.status(SUCCESS).json({ create: true, resCreateForm });
  } catch (error) {
    response.status(ERROR).json({ create: false, error: error.message });
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

const putForm = (request, response) => {
  try {
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

module.exports = { postForm, getFormId, getFormName, putForm, deleteForm };
