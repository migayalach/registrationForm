const validationLogin = (userData) => {
  const errors = {};

  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.emailUser)) {
    errors.emailUser = "Ingrese una direccion de correo valida";
  }
  if (!userData.emailUser) {
    errors.emailUser = "Por favor ingrese un correo de contacto";
  }
  if (userData.emailUser.length > 35) {
    errors.emailUser =
      "El nombre de usuario no puede tener mas de 35 caracteres :C";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos 1 numero";
  }
  if (userData.password.length < 6 || userData.password.length > 20) {
    errors.password =
      "La contraseña debe tener una longitud entre 6 y 20 caracteres";
  }

  return errors;
};

export default validationLogin;
