// COMPONET'S
import EquipmentForm from "./EquipmentForm";
import EquipmentData from "./EquipmentData";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// REDUX

// STYLESHEET'S
import "../../StyleSheets/ListaDeTareas.css";

const DataEquipment = ({ handleData }) => {
  const [equipos, setEquipos] = useState([]);
  const [flag, setFlag] = useState(false);
  const selectEquipment = useSelector((state) => state.auxExtra);
  const dataEquipment = selectEquipment[0]?.equipment;

  const agregarEquipo = (equipment, name) => {
    equipment.id = uuidv4();
    equipment.equipo = name;
    const equipo = [equipment, ...equipos];
    setEquipos(equipo);
  };

  const eliminarEquipo = (id) => {
    const equiposActualizados = equipos.filter(
      (equipment) => equipment.id !== id
    );
    setEquipos(equiposActualizados);
  };

  const completarTarea = (id, checked) => {
    for (const i of equipos) {
      if (i.id === id) {
        i.check = !checked;
      }
    }
    setFlag(!flag);
  };

  useEffect(() => {
    handleData(equipos, "equipment");
  }, [equipos, flag]);

  useEffect(() => {
    if (dataEquipment) {
      setEquipos(dataEquipment);
    }
  }, [dataEquipment]);

  return (
    <>
      <EquipmentForm agregarEquipo={agregarEquipo} />
      <div className="tareas-lista-contenedor">
        {equipos.map(({ id, idEquipment, equipo, host, ip, check }) => (
          <EquipmentData
            key={id}
            id={id}
            idEquipment={idEquipment}
            equipo={equipo}
            host={host}
            ip={ip}
            check={check}
            eliminarEquipo={eliminarEquipo}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default DataEquipment;
