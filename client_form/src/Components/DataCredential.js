import React, { useState, useEffect } from "react";
import "../StyleSheets/ListaDeTareas.css";
import CredentialForm from "./CredentialForm";
import CredentialData from "./CredentialData";
import { v4 as uuidv4 } from "uuid";

const DataCredential = ({ handleData }) => {
  const [credenciales, setCredenciales] = useState([]);

  const agregarCredencial = (credential, name) => {
    credential.id = uuidv4();
    credential.credencial = name;
    const credencial = [credential, ...credenciales];
    setCredenciales(credencial);
  };

  const eliminarCredencial = (id) => {
    const credencialesActualizadas = credenciales.filter(
      (credencial) => credencial.id !== id
    );
    setCredenciales(credencialesActualizadas);
  };

  const completarTarea = (id) => {
    const credencialesActualizadas = credenciales.map((credencial) => {
      if (credencial.id === id) {
        credencial.completada = !credencial.completada;
      }
      return credencial;
    });
    setCredenciales(credencialesActualizadas);
  };

  useEffect(() => {
    handleData(credenciales, "credential");
  }, [credenciales]);

  return (
    <>
      <CredentialForm agregarCredencial={agregarCredencial} />
      <div className="tareas-lista-contenedor">
        {credenciales.map(({ id, idCredential, credencial, check }) => (
          <CredentialData
            key={id}
            id={id}
            idCredential={idCredential}
            credential={credencial}
            check={check}
            eliminarCredencial={eliminarCredencial}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};
export default DataCredential;
