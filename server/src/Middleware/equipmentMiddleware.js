const ERROR = 400;

const validateEquipmentData = (request, response, next) => {
  const { name } = request.body;
  const minLength = 4;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (name.length < minLength)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });
  next();
};

const validateEquipmentDataPut = (request, response, next) => {
  const { idEquipment, name } = request.body;
  if (!idEquipment)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idEquipment))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  next();
};

module.exports = { validateEquipmentData, validateEquipmentDataPut };
