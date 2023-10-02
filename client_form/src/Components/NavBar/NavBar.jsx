// COMPONET'S

// HOOK'S
import { NavLink } from "react-router-dom";

// STYLESHEET'S
import "../NavBar/navBar.css";

const NavBar = () => {
  return (
    <>
      <NavLink to="/home" className="custom-link">
        Home
      </NavLink>
      <NavLink to="/state" className="custom-link">
        Estados
      </NavLink>
      <NavLink to="/procedures" className="custom-link">
        Procedimientos
      </NavLink>
      <NavLink to="/equipment" className="custom-link">
        Equipo
      </NavLink>
      <NavLink to="/area" className="custom-link">
        Área
      </NavLink>
      <NavLink to="/user" className="custom-link">
        Usuarios
      </NavLink>
      <NavLink to="/credential" className="custom-link">
        Credenciales
      </NavLink>
      <NavLink to="/form" className="custom-link">
        Formularios
      </NavLink>
      <NavLink to="/userApi" className="custom-link">
        Usuarios RRHH
      </NavLink>
      <NavLink to="/about-Me" className="custom-link">
        Sobre mi
      </NavLink>
      <NavLink to="/" className="custom-link">
        Salir
      </NavLink>
    </>
  );
};

export default NavBar;
