// COMPONET'S
import { NavLink } from "react-router-dom";
import Filter from "../../../Components/Filter/Filter";
import DataServerPrublic from "../../../Components/DataServerPrublic";
import DataEquipment from "../../../Components/DataEquipment";
import DataCredential from "../../../Components/DataCredential";
import SelectState from "../../../Components/SelectState";
import SelectProcedures from "../../../Components/SelectProcedures";
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { postForm } from "../../../Redux/actions";

// STYLESHEET'S

const Form = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    idUser: "",
    idState: "",
    idProcedure: "",
    equipment: "",
    credential: "",
  });

  const handleData = (info, type) => {
    setData({
      ...data,
      [type]: info,
    });
  };

  const handleAccept = () => {
    dispatch(postForm(data));
  };

  useEffect(() => {}, []);

  return (
    <>
      <h4>Seleccione un estado:</h4>
      <SelectState handleData={handleData} />
      <h4>Seleccione un proceso:</h4>
      <SelectProcedures handleData={handleData} />
      <h4>1.- Datos del servidor publico:</h4>
      <DataServerPrublic handleData={handleData} />
      <h4>2.- Equipos de computación:</h4>
      <DataEquipment handleData={handleData} />
      <h4>3.- Credenciales de acceso:</h4>
      <DataCredential handleData={handleData} />
      <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
    </>
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
