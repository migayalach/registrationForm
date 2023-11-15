const ERROR = 400;

const validateId = (request, response, next) => {
  const {
    idState,
    idProcedures,
    idEquipment,
    idUnit,
    idCredential,
    idUser,
    idForm,
  } = request.params;
  try {
    if (
      !Number.isInteger(
        +idState ||
          +idProcedures ||
          +idEquipment ||
          +idUnit ||
          +idCredential ||
          +idUser ||
          +idForm
      )
    )
      throw Error(`No se encontro lo busca`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ tools: false, error: error.message });
  }
};

const validateName = (request, response, next) => {
  const { name } = request.query;
  try {
    if (!name) throw Error(`Por favor ingrese un nombre para poder buscarlo`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ tools: false, error: error.message });
  }
};

module.exports = { validateId, validateName };
