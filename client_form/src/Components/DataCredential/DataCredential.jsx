// COMPONET'S
import CredentialForm from "./CredentialForm";
import CredentialData from "./CredentialData";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// REDUX

// STYLESHEET'S
import "../../StyleSheets/ListaDeTareas.css";

const DataCredential = ({ handleData }) => {
  const [credenciales, setCredenciales] = useState([]);
  const [flag, setFlag] = useState(false);
  const selectCredencial = useSelector((state) => state.auxExtra);
  const dataCredencial = selectCredencial[0]?.credential;
  const selUserData = useSelector((state) => state.auxUser);
  const selArea = useSelector((state) => state.area);
  const area = selArea.map(({ nameUnit }) => nameUnit);
  const userArea = selUserData[0]?.unit;
  const resulData = area.find((index) => index === userArea);

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

  const completarTarea = (id, checked) => {
    for (const i of credenciales) {
      if (i.id === id) {
        i.check = !checked;
      }
    }
    setFlag(!flag);
  };

  useEffect(() => {
    handleData(credenciales, "credential");
  }, [credenciales, flag]);

  useEffect(() => {
    if (dataCredencial) {
      setCredenciales(dataCredencial);
    }
  }, [dataCredencial]);

  return (
    <>
      {resulData === "UTIC" && (
        <CredentialForm agregarCredencial={agregarCredencial} />
      )}
      <div className="tareas-lista-contenedor">
        {credenciales.map(({ id, idCredential, credencial, check }) => (
          <CredentialData
            key={id}
            id={id}
            idCredential={idCredential}
            credential={credencial}
            check={check}
            resulData={resulData}
            eliminarCredencial={eliminarCredencial}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};
export default DataCredential;
