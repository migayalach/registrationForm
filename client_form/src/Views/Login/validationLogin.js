const validationLogin = (userData) => {
  const errors = {};

  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)) {
    errors.email = "Ingrese una direccion de correo valida";
  }
  if (!userData.email) {
    errors.email = "Por favor ingrese un correo de contacto";
  }
  if (userData.email.length > 35) {
    errors.email =
      "El nombre de usuario no puede tener mas de 35 caracteres :C";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos 1 numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validationLogin;
