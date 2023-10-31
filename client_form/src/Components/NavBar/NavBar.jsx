// COMPONET'S

// HOOK'S
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navBar.module.css";

const NavBar = ({ changeState }) => {
  return (
    <div className={styles["navbar-container"]}>
      <NavLink to="/home">
        <FontAwesomeIcon icon="fa-solid fa-house" className={styles.icon} />{" "}
        Home
      </NavLink>
      <NavLink to="/state">
        <FontAwesomeIcon icon="fa-brands fa-medium" className={styles.icon} />
        Estados
      </NavLink>
      <NavLink to="/procedures">
        <FontAwesomeIcon icon="fa-solid fa-file" className={styles.icon} />
        Procedimientos
      </NavLink>
      <NavLink to="/equipment">
        <FontAwesomeIcon
          icon="fa-solid fa-people-group"
          className={styles.icon}
        />
        Equipo
      </NavLink>
      <NavLink to="/area">
        <FontAwesomeIcon icon="fa-solid fa-bullseye" className={styles.icon} />
        Área
      </NavLink>
      <NavLink to="/user">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-user"
          className={styles.icon}
        />
        Usuarios
      </NavLink>
      <NavLink to="/credential">
        <FontAwesomeIcon
          icon="fa-regular fa-address-card"
          className={styles.icon}
        />
        Credenciales
      </NavLink>
      <NavLink to="/form">
        <FontAwesomeIcon icon="fa-brands fa-wpforms" className={styles.icon} />
        Formularios
      </NavLink>
      <NavLink to="/userApi">
        <FontAwesomeIcon icon="fa-solid fa-user" className={styles.icon} />
        Usuarios RRHH
      </NavLink>
      <NavLink to="/about-Me">
        <FontAwesomeIcon icon="fa-solid fa-person" className={styles.icon} />
        Sobre mi
      </NavLink>
      <div onClick={() => changeState()}>
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          className={styles.icon}
        />
        Salir
      </div>
      <hr className={styles.line} />
      <h3>Ministerio de la Presidencia</h3>
    </div>
  );
};

export default NavBar;
