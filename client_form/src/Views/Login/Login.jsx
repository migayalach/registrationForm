// COMPONET'S
import FormLogin from "../Forms/FormLogin/FormLogin";

// HOOK'S
import { useEffect } from "react";

//REDUX

//JAVASCRIP

// STYLESHEET'S
import "./login.css";

const Login = () => {
  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, []);

  return (
    <div className="login-container">
      <FormLogin />
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
