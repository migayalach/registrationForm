import React from "react";
import "../../StyleSheets/Tarea.css";
import { AiFillCloseCircle } from "react-icons/ai";

const EquipmentData = ({
  id,
  equipo,
  host,
  ip,
  check,
  completarTarea,
  eliminarEquipo,
  resulData,
}) => {
  return (
    <div>
      <table border="1px" style={{ width: "500px", height: "40px" }}>
        <thead>
          <tr>
            <th>Tipo: </th>
            <th>Host: </th>
            <th>Direccion IP: </th>
            <th>Etiqueta de control: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "150px" }}>{equipo}</td>
            <td style={{ width: "150px" }}>{host}</td>
            <td style={{ width: "150px" }}>{ip}</td>
            <td style={{ width: "150px" }}>
              <input
                type="checkbox"
                checked={check}
                onClick={() => completarTarea(id, check)}
                disabled={resulData !== "UTIC"}
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>

      {resulData === "UTIC" && (
        <div
          className="tarea-contenedor-iconos"
          onClick={() => eliminarEquipo(id)}
        >
          <AiFillCloseCircle className="tarea-icono" />
        </div>
      )}
    </div>
  );
};

export default EquipmentData;
