import { nameRegex } from "../Utils/regex";

export const validationCredential = (userData) => {
  const errorsCredential = {};
  const maxLengthName = 20;
  const minLengthName = 4;

  if (!nameRegex.test(userData.name)) {
    errorsCredential.name = `La primera letra no puede ser caracter especial ni numero`;
  }
  if (userData.name.length === 0) {
    errorsCredential.name = `El nombre no puede estar vacio`;
  }
  if (userData.name.length < minLengthName) {
    errorsCredential.name = `El nombre no puede tener menos de ${minLengthName} caracteres`;
  }
  if (userData.name.length > maxLengthName) {
    errorsCredential.name = `El nombre no puede tener mas de ${maxLengthName} caracteres`;
  }

  if (!userData.UserIdUser) {
    errorsCredential.idUser = "Por favor seleccione un usuario";
  }

  return errorsCredential;
};
