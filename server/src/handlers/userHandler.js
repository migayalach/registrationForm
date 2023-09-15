const SUCCESS = 200;
const ERROR = 400;

const { createUser } = require("../controllers/userController");

const postUser = async (request, response) => {
  const { name, ChargeIdCharges } = request.body;
  try {
    const newUser = await createUser(name, ChargeIdCharges);
    response.status(SUCCESS).json({ success: true, newUser });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUser,
};
