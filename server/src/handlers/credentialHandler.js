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
    response.status(SUCCESS).json({ create: true, newCredential });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
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
  const { name } = request.query;
  try {
    const getNameCredential = name
      ? await getSearchCategoryName(name)
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
    response.status(SUCCESS).json({ update: true, editCredential });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteCredential = async (request, response) => {
  const { idCredential } = request.params;
  try {
    const deleteInfo = await delCredential(idCredential);
    response.status(SUCCESS).json({ update: true, deleteInfo });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postCredential,
  getCredentialId,
  getCredentialName,
  putCredential,
  deleteCredential,
};
