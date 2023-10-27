import React, { useEffect, useState } from "react";
import "../StyleSheets/TareaFormulario.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllEquipment, getIdEquipment } from "../Redux/actions";

const EquipmentForm = ({ agregarEquipo }) => {
  const dispatch = useDispatch();
  const selectEquipment = useSelector((state) => state.equipment);
  const nameEquipment = useSelector((state) => state.aux);
  const equipo = nameEquipment[0]?.name;

  const [input, setInput] = useState({
    idEquipment: "",
    host: "",
    ip: "",
    check: false,
  });

  const manejarCambio = (event) => {
    setInput({
      ...input,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const manejarEnvio = (event) => {
    // EVITA QUE LA PAGUINA SE RECARGE
    event.preventDefault();
    agregarEquipo(input, equipo);
  };

  useEffect(() => {
    dispatch(getAllEquipment());
  }, []);

  useEffect(() => {
    dispatch(getIdEquipment(input.idEquipment));
  }, [input]);

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <label>Tipo: </label>
      <select name="idEquipment" value={input.tipo} onChange={manejarCambio}>
        <option></option>
        {selectEquipment.map(({ idEquipment, name }, index) => (
          <option key={index} value={idEquipment}>
            {name}
          </option>
        ))}
      </select>
      <label>Host: </label>
      <input
        type="text"
        placeholder="255.255.255.255"
        name="host"
        value={input.host}
        onChange={manejarCambio}
      />
      <label>Direccion Ip: </label>
      <input
        type="text"
        name="ip"
        value={input.ip}
        placeholder="192.168.168.121"
        onChange={manejarCambio}
      />
      <label>Etiqueta de control: </label>
      <input
        type="checkbox"
        name="check"
        value={input.check}
        onChange={manejarCambio}
      />

      <button className="tarea-boton">Agregar Equipo</button>
    </form>
  );
};

export default EquipmentForm;
