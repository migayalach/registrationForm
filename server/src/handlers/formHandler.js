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

const postForm = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};
const getFormId = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};
const getFormName = (request, response) => {
  try {
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
const deleteForm = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { postForm, getFormId, getFormName, putForm, deleteForm };
