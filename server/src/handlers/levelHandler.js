const SUCCESS = 200;
const ERROR = 400;
const {
  createLevel,
  getLevelSearchId,
  getLevelSearchName,
  updateLevel,
  delLevel,
} = require("../controllers/levelController");

const postLevel = async (request, response) => {
  const { nameLevel } = request.body;
  try {
    const newLevel = await createLevel({ nameLevel });
    response.status(SUCCESS).json({ create: true, newLevel: nameLevel });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevelId = (request, response) => {
  response.status(SUCCESS).send("consultapor id");
};

const getLevelName = (request, response) => {
  response.status(SUCCESS).send("consultapor name");
};

const putLevel = async (request, response) => {
  const { idCharges, nameLevel } = request.body;
  try {
    const updateData = await updateLevel(idCharges, nameLevel);
    response.status(SUCCESS).json(updateData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteLevel = async (request, response) => {
  const { idCharges } = request.params;
  try {
    const resultDelete = await delLevel(idCharges);
    response.status(SUCCESS).json({ success: true, resultDelete });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postLevel,
  getLevelId,
  getLevelName,
  putLevel,
  deleteLevel,
};
