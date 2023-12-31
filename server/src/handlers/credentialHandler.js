const SUCCESS = 200;
const ERROR = 400;

const {
  createCredential,
  getSearchCredentialId,
  getSearchCategoryName,
  getAllCredential,
  updateCredential,
  delCredential,
} = require("../controllers/credentialControllers");

const postCredential = async (request, response) => {
  const { name, UserIdUser } = request.body;
  try {
    const newCredential = await createCredential(name, UserIdUser);
    response.status(SUCCESS).json({
      credential: true,
      message: "Credencial creada exitosamente",
      newCredential,
    });
  } catch (error) {
    response.status(ERROR).json({ credential: false, error: error.message });
  }
};

const getCredentialId = async (request, response) => {
  const { idCredential } = request.params;
  try {
    const getIdCredential = await getSearchCredentialId(idCredential);
    response.status(SUCCESS).json(getIdCredential);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getCredentialName = async (request, response) => {
  const { nameUser, name, order } = request.query;
  try {
    const getNameCredential =
    nameUser || name || order
        ? await getSearchCategoryName(nameUser, name, order)
        : await getAllCredential();
    response.status(SUCCESS).json(getNameCredential);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putCredential = async (request, response) => {
  const { idCredential, name } = request.body;
  try {
    const editCredential = await updateCredential(idCredential, name);
    response.status(SUCCESS).json({
      credential: true,
      message: "Credencial actualizada exitosamente",
      editCredential,
    });
  } catch (error) {
    response.status(ERROR).json({ credential: false, error: error.message });
  }
};

const deleteCredential = async (request, response) => {
  const { idCredential } = request.params;
  try {
    const deleteInfo = await delCredential(idCredential);
    response.status(SUCCESS).json({
      credential: true,
      message: "Credencial eliminada exitosamente",
      deleteInfo,
    });
  } catch (error) {
    response.status(ERROR).json({ credential: false, error: error.message });
  }
};

module.exports = {
  postCredential,
  getCredentialId,
  getCredentialName,
  putCredential,
  deleteCredential,
};
