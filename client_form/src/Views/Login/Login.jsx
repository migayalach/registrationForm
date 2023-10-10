// COMPONET'S

// HOOK'S
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./login.module.css";
// STYLESHEET'S

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, []);

  const handleHola = () => {
    navigate("/home");
  };

  return (
      <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <h1 >Formulario de Autenticación</h1>
        <div>
          <input type="text" placeholder="Ingrese su Correo" className={styles["input"]} />
        </div>
        <div>
          <input type="password" placeholder="Contraseña" className={styles["input"]} />
        </div>
        <button onClick={handleHola} className={styles["login-button"]}>Login</button>
      </div>
      <div className={styles["welcome-message"]}>
        <p>
          Bienvenido al <span className={styles["highlight-text"]}>Sistema de Control de Altas y Bajas</span>
        </p>
        <h4>Ministerio de la Presidencia</h4>
      </div>
    </div>
  );
};

export default Login;

// //usar JWT
// Registro e inicio de sesión: Cuando un usuario se registra o inicia sesión, el servidor genera un token JWT que contiene información de autenticación, como el ID del usuario o cualquier otro dato necesario. Este token se firma digitalmente con una clave secreta en el servidor y se envía al cliente como respuesta al inicio de sesión o al registro.

// Almacenamiento seguro: El cliente almacena el token de forma segura, generalmente en las cookies o en el almacenamiento local del navegador. Usar cookies es una opción más segura porque se envían automáticamente con cada solicitud HTTP y son menos vulnerables a ataques XSS.

// Protección de rutas: En tu aplicación, puedes usar middleware o funciones de verificación para proteger las rutas que requieren autenticación. Al verificar el token JWT en cada solicitud, puedes asegurarte de que solo los usuarios autenticados tengan acceso a ciertas rutas.

// Renovación de tokens: Los tokens JWT tienen una fecha de vencimiento. Para mantener la sesión activa, puedes implementar la renovación de tokens antes de que expiren. Cuando un usuario realiza una solicitud con un token próximo a vencer, el servidor puede emitir un nuevo token válido.

// Cierre de sesión seguro:

// Destrucción del token: Cuando un usuario elige cerrar sesión, el cliente debe eliminar el token almacenado. En el servidor, se puede mantener una lista negra (blacklist) de tokens revocados o eliminados.

// Expire tokens: Los tokens JWT también tienen un tiempo de vida. Después de que un token expire naturalmente, no se puede usar para acceder a rutas protegidas.

// Cambiar claves: Para aumentar la seguridad, puedes cambiar periódicamente la clave secreta utilizada para firmar los tokens en el servidor.

// Recuerda que esta es una descripción general y que la implementación de un sistema de autenticación basado en JWT puede variar según el lenguaje de programación y el framework que estés utilizando. Además, es importante seguir las mejores prácticas de seguridad, como proteger tu servidor contra ataques XSS y CSRF, y utilizar HTTPS para cifrar las comunicaciones entre el cliente y el servidor.
