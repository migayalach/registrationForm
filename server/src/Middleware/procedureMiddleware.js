const ERROR = 400;

const validateProcedureData = (request, response, next) => {
  const { nameProcedures } = request.body;
  const minLength = 4;
  if (!nameProcedures)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (nameProcedures.length < minLength)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });
  next();
};

const validateProcedureDataPut = (request, response, next) => {
  const { idProcedures, nameProcedures } = request.body;
  if (!idProcedures)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idProcedures))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!nameProcedures)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  next();
};

module.exports = { validateProcedureData, validateProcedureDataPut };
