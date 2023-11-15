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
    return response.status(ERROR).json({ error: `No se encontro lo busca` });
  next();
};

const validateName = (request, response, next) => {
  const { name } = request.query;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre para poder buscarlo` });
  next();
};

module.exports = { validateId, validateName };
