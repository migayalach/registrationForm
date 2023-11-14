const ERROR = 400;

const validateStateData = (request, response, next) => {
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

const validateStateId = (request, response, next) => {
  const { idState } = request.params;
  if (!Number.isInteger(+idState))
    return response
      .status(ERROR)
      .json({ error: `No se permiten el tipo de dato que busca` });
  next();
};

const validateStateName = (request, response, next) => {
  const { name } = request.query;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre para poder buscarlo` });
  next();
};

module.exports = { validateStateData, validateStateId, validateStateName };
