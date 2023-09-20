const SUCCESS = 200;
const ERROR = 400;
const { createSubUnit } = require("../controllers/subUnitControllers");

const postSubUnit = async (request, response) => {
  const { nameSubUnit, UnitIdUnit } = request.body;
  try {
    const responseInfo = await createSubUnit(nameSubUnit, UnitIdUnit);
    response.status(SUCCESS).json(responseInfo);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// const putSubUnit = () => {
//   try {

//   } catch (error) {

//   }
// };

module.exports = {
  postSubUnit,
  // putSubUnit,
};
