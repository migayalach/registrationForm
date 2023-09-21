const SUCCESS = 200;
const ERROR = 400;

const { createCredential } = require("../controllers/credentialControllers");

const postCredential = async (request, response) => {
  const { name } = request.body;
  try {
    const newCredential = await createCredential(name);
    response.status(SUCCESS).json({ create: true, newCredential });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postCredential,
};
