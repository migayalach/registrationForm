const ERROR = 400;

const validateData = (request, response, next) => {
  const { name } = request.body;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (name.length < 4)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });
  next();
};

const validateId = (request, response, next) => {
  const { idState } = request.params;
  if (!Number.isInteger(+idState))
    return response.status(ERROR).json({ error: `No se encontro lo busca` });
  next();
};

const validateDataPut = (request, response, next) => {
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

const validateName = (request, response, next) => {
  const { name } = request.query;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre para poder buscarlo` });
  next();
};

module.exports = { validateData, validateId, validateName, validateDataPut };
