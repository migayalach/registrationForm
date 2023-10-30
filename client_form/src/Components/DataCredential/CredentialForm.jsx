import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCredential, getIdCredential } from "../../Redux/actions";

const CredentialForm = ({ agregarCredencial }) => {
  const dispatch = useDispatch();
  const selectCredential = useSelector((state) => state.credential);
  const nameCredential = useSelector((state) => state.aux);
  const credential = nameCredential[0]?.name;
  const [input, setInput] = useState({
    idCredential: "",
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
    agregarCredencial(input, credential);
  };

  useEffect(() => {
    dispatch(getAllCredential());
  }, []);

  useEffect(() => {
    dispatch(getIdCredential(input.idCredential));
  }, [input]);

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <label>Tipo: </label>
      <select
        name="idCredential"
        value={input.idCredential}
        onChange={manejarCambio}
      >
        <option></option>
        {selectCredential.map(({ idCredential, name }, index) => (
          <option key={index} value={idCredential}>
            {name}
          </option>
        ))}
      </select>
      <label>Etiqueta de control: </label>
      <input
        type="checkbox"
        name="check"
        value={input.check}
        onChange={manejarCambio}
      />

      <button className="tarea-boton">Agregar Creencial</button>
    </form>
  );
};

export default CredentialForm;
