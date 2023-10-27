// COMPONET'S
import { NavLink } from "react-router-dom";
import Filter from "../../../Components/Filter/Filter";

import DataServerPrublic from "../../../Components/DataServerPrublic";
import ListaDeTareas from "../../../Components/ListaDeTareas";
import DataCredential from "../../../Components/DataCredential";

// HOOK'S

// STYLESHEET'S

const Form = () => {
  return (
    <div>
      <h4>1.- Datos del servidor publico:</h4>
      <DataServerPrublic />
      <h4>2.- Equipos de computación:</h4>
      <ListaDeTareas />
      <h4>3.- Credenciales de acceso:</h4>
      <DataCredential />
    </div>
  );
};

export default Form;

{
  /* <Filter />
      <h1>opciones</h1>
      <p>vita de los filtros</p>
      <h1>Crecion de un nuevo formulario puede ser</h1>
      <div>
        <NavLink to="/high">Alta</NavLink>
        <NavLink to="/low">Baja</NavLink>
        <NavLink to="/change">Cambio</NavLink>
      </div> */
}
