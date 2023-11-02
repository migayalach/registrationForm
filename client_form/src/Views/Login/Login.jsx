// COMPONET'S

// HOOK'S
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//REDUX
import { login } from "../../Redux/actions";

//JAVASCRIP

// STYLESHEET'S
import "./login.css";

const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    emailUser: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(inputData));
    // navigate("/home");
  };

  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, []);

  return (
    <div className="login-container">
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="welcome-message">
        <p>
          Bienvenido al{" "}
          <span className="highlight-text">
            Sistema de Control de Altas y Bajas
          </span>
        </p>
        <h4>Ministerio de la Presidencia</h4>
      </div>
    </div>
  );
};

export default Login;
