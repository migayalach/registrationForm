const ERROR = 400;

const validateUnitData = (request, response, next) => {
  const { nameUnit } = request.body;
  const minLength = 4;
  if (!nameUnit)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (nameUnit.length < minLength)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });
  next();
};

const validateUnitDataPut = (request, response, next) => {
  const { idUnit, nameUnit } = request.body;
  if (!idUnit)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idUnit))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!nameUnit)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  next();
};

module.exports = { validateUnitData, validateUnitDataPut };
