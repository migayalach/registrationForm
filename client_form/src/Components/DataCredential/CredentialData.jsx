// LIBRERIAS
import { AiFillCloseCircle } from "react-icons/ai";

// STYLESHEET'S

const CredentialData = ({
  id,
  credential,
  check,
  resulData,
  completarTarea,
  eliminarCredencial,
  credentialData,
}) => {
  return (
    <div>
      <table border="1px" style={{ width: "500px", height: "40px" }}>
        <thead>
          <tr>
            <th>Tipo: </th>
            <th>Etiqueta de control: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "150px" }}>{credential}</td>
            <td style={{ width: "150px" }}>
              <input
                type="checkbox"
                checked={check}
                onClick={() => completarTarea(id, check)}
                readOnly
                disabled={
                  credential !== credentialData && credentialData != "UTIC"
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      {resulData === "UTIC" && (
        <div
          className="tarea-contenedor-iconos"
          onClick={() => eliminarCredencial(id)}
        >
          <AiFillCloseCircle className="tarea-icono" />
        </div>
      )}
    </div>
  );
};

export default CredentialData;
