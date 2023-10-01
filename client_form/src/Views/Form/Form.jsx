import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <div>
      <p>filtros</p>
      <h1>opciones</h1>
      <p>vita de los filtros</p>
      <h1>Crecion de un nuevo formulario puede ser</h1>
      <div>
        <NavLink to="/alta">Alta</NavLink>
        <NavLink to="/baja">Baja</NavLink>
        <NavLink to="/cambio">Cambio</NavLink>
      </div>
    </div>
  );
};

export default Form;
