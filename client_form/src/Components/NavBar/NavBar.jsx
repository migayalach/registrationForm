// COMPONET'S
import { NavLink } from "react-router-dom";

// HOOK'S

// STYLESHEET'S

const NavBar = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/state">Estados</NavLink>
      <NavLink to="/procedures">Procedimientos</NavLink>
      <NavLink to="/equipment">Equipo</NavLink>
      <NavLink to="/area">Área</NavLink>
      <NavLink to="/user">Usuario</NavLink>
      <NavLink to="/credential">Credenciales</NavLink>
      <NavLink to="/form">Formularios</NavLink>
      <NavLink to="/about-Me">Sobre mi</NavLink>
      <NavLink to="/out">Salir</NavLink>
    </>
  );
};

export default NavBar;
