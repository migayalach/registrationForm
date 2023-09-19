const SUCCESS = 200;
const ERROR = 400;
const { createUnit } = require("../controllers/unitControllers");
const postUnit = async (request, response) => {
  const { nameUnit } = request.body;
  try {
    const newUnit = await createUnit({ nameUnit });
    response.status(SUCCESS).json({ create: true, name: newUnit.nameUnit });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUnit,
};
