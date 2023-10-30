const SUCCESS = 200;
const ERROR = 400;

const { getLoginData } = require("../controllers/loginController");

const getLogin = async (request, response) => {
  const { emailUser, password } = request.body;
  try {
    const loginResponse = await getLoginData(emailUser, password);
    response.status(SUCCESS).json(loginResponse);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getLogin };
