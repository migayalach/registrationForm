const ERROR = 400;

const validateFormData = (request, response, next) => {
  const { idUser, idState, idProcedure, equipment, credential } = request.body;
  if (!idUser)
    return response.status(ERROR).json({ error: `Se necesita un usuario` });
  if (!Number.isInteger(+idUser))
    return response.status(ERROR).json({ error: `Revise el usuario existe` });

  if (!idState)
    return response.status(ERROR).json({ error: `Se necesita un estado` });
  if (!Number.isInteger(+idState))
    return response.status(ERROR).json({ error: `Revise el estado existe` });

  if (!idProcedure)
    return response.status(ERROR).json({ error: `Se necesita un proceso` });
  if (!Number.isInteger(+idProcedure))
    return response.status(ERROR).json({ error: `Revise el proceso existe` });

  if (!equipment.length)
    return response
      .status(ERROR)
      .json({ error: `Se necesita por lo menos un equipo` });

  if (!credential.length)
    return response
      .status(ERROR)
      .json({ error: `Se necesita por lo menos una credencial` });

  next();
};

const validateFormDataPut = (request, response, next) => {
  const { idForm, idUser, idState, idProcedure, credential, equipment } =
    request.body;
    
  if (!Number.isInteger(+idForm))
    return response.status(ERROR).json({ error: `No se encontro lo busca` });
  if (!idUser)
    return response.status(ERROR).json({ error: `Se necesita un usuario` });
  if (!Number.isInteger(+idUser))
    return response.status(ERROR).json({ error: `Revise el usuario existe` });

  if (!idState)
    return response.status(ERROR).json({ error: `Se necesita un estado` });
  if (!Number.isInteger(+idState))
    return response.status(ERROR).json({ error: `Revise el estado existe` });

  if (!idProcedure)
    return response.status(ERROR).json({ error: `Se necesita un proceso` });
  if (!Number.isInteger(+idProcedure))
    return response.status(ERROR).json({ error: `Revise el proceso existe` });

  if (!equipment.length)
    return response
      .status(ERROR)
      .json({ error: `Se necesita por lo menos un equipo` });

  if (!credential.length)
    return response
      .status(ERROR)
      .json({ error: `Se necesita por lo menos una credencial` });
  next();
};

module.exports = { validateFormData, validateFormDataPut };
