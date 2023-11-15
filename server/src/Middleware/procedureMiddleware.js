const ERROR = 400;

const validateProcedureData = (request, response, next) => {
  const { nameProcedures } = request.body;
  const minLength = 4;
  try {
    if (!nameProcedures) throw Error(`Por favor ingrese un nombre`);
    if (nameProcedures.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ procedure: false, error: error.message });
  }
};

const validateProcedureDataPut = (request, response, next) => {
  const { idProcedures, nameProcedures } = request.body;
  try {
    if (!idProcedures) throw Error(`Falta el identificador de lo que busca`);
    if (!Number.isInteger(+idProcedures))
      throw Error(
        `Necesitamos saber el identificador unico para poder buscarlo`
      );
    if (!nameProcedures) throw Error(`Por favor ingrese un nombre`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ procedure: false, error: error.message });
  }
};

module.exports = { validateProcedureData, validateProcedureDataPut };
