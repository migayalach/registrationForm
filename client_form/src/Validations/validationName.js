import { nameRegex } from "../Utils/regex";

export const validationName = ({ name }) => {
  const errorName = {};
  const maxLengthName = 20;
  const minLengthName = 5;

  if (!nameRegex.test(name)) {
    errorName.name = `La primera letra no puede ser caracter especial ni numero`;
  }

  if (name.length === 0) {
    errorName.name = `El nombre no puede estar vacio`;
  }

  if (name.length < minLengthName) {
    errorName.name = `El nombre no puede tener menos de ${minLengthName} caracteres`;
  }

  if (name.length > maxLengthName) {
    errorName.name = `El nombre no puede tener mas de ${maxLengthName} caracteres`;
  }

  return errorName;
};
