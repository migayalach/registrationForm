// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import {
  deleteArea,
  deleteEquipment,
  deleteState,
  deleteProcedures,
  deleteUser,
} from "../Redux/actions";

export const ButtonDelete = ({
  id,
  idEquipment,
  idState,
  idProcedures,
  idUser,
  flag,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    flag === "area" && dispatch(deleteArea(id));
    flag === "equipment" && dispatch(deleteEquipment(idEquipment));
    flag === "state" && dispatch(deleteState(idState));
    flag === "procedures" && dispatch(deleteProcedures(idProcedures));
    flag === "user" && dispatch(deleteUser(idUser));
  };

  return (
    <>
      {flag !== "userApi" && (
        <button onClick={() => handleDelete()}>ELIMINAR</button>
      )}
    </>
  );
};
