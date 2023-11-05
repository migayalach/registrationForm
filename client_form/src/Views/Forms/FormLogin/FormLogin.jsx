// COMPONET'S

// HOOK'S
import { useState } from "react";
import { useDispatch } from "react-redux";

//REDUX
import { login } from "../../../Redux/actions";

//JAVASCRIP
import validationLogin from "./validationLogin";

// STYLESHEET'S
import "../../Login/login.css";

const FormUserInfo = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErros] = useState({});
  const [inputData, setInputData] = useState({
    emailUser: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(inputData));
  };

  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
    setErros(
      validationLogin({ ...inputData, [event.target.name]: event.target.value })
    );
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h1>Formulario de Autenticación</h1>
      <div>
        <input
          type="text"
          name="emailUser"
          value={inputData.emailUser}
          onChange={handleChange}
          placeholder="Ingrese su Correo"
          className="input"
        />
        {errors.emailUser && <p className="error">{errors.emailUser}</p>}
      </div>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={inputData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          className="input"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`toggle-password-button ${
            showPassword ? "show-password" : "hide-password"
          }`}
        >
          {showPassword ? "Ocultar" : "Mostrar"} contraseña
        </button>
      </div>

      {Object.keys(errors).length < 1 && (
        <button type="submit" className="login-button">
          Login
        </button>
      )}
    </form>
  );
};

export default FormUserInfo;
