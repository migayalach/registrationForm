const ERROR = 400;

const validateFormData = (request, response, next) => {
  const { idUser, idState, idProcedure, equipment, credential } = request.body;
  try {
    if (!idUser) throw Error(`Se necesita un usuario`);
    if (!Number.isInteger(+idUser)) throw Error(`Revise el usuario existe`);
    if (!idState) throw Error(`Se necesita un estado`);
    if (!Number.isInteger(+idState)) throw Error(`Revise el estado existe`);
    if (!idProcedure) throw Error(`Se necesita un proceso`);
    if (!Number.isInteger(+idProcedure))
      throw Error(`Revise el proceso existe`);
    if (!equipment.length) throw Error(`Se necesita por lo menos un equipo`);
    if (!credential.length)
      throw Error(`Se necesita por lo menos una credencial`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ form: false, error: error.message });
  }
};

const validateFormDataPut = (request, response, next) => {
  const { idForm, idUser, idState, idProcedure, credential, equipment } =
    request.body;
  try {
    if (!Number.isInteger(+idForm)) throw Error(`No se encontro lo busca`);
    if (!idUser) throw Error(`Se necesita un usuario`);
    if (!Number.isInteger(+idUser)) throw Error(`Revise el usuario existe`);
    if (!idState) throw Error(`Se necesita un estado`);
    if (!Number.isInteger(+idState)) throw Error(`Revise el estado existe`);
    if (!idProcedure) throw Error(`Se necesita un proceso`);
    if (!Number.isInteger(+idProcedure))
      throw Error(`Revise el proceso existe`);
    if (!equipment.length) throw Error(`Se necesita por lo menos un equipo`);
    if (!credential.length)
      throw Error(`Se necesita por lo menos una credencial`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ form: false, error: error.message });
  }
};

module.exports = { validateFormData, validateFormDataPut };
