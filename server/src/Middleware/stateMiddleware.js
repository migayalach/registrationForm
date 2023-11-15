const ERROR = 400;

const validateStateData = (request, response, next) => {
  const { name } = request.body;
  const minLength = 4;
  try {
    if (!name) throw Error(`Por favor ingrese un nombre`);
    if (name.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ validate: false, error: error.message });
  }
};

const validateStateDataPut = (request, response, next) => {
  const { idState, name } = request.body;
  if (!idState)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idState))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  next();
};

module.exports = { validateStateData, validateStateDataPut };
