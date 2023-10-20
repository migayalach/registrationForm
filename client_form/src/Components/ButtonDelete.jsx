// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { deleteArea, deleteEquipment, deleteState } from "../Redux/actions";

export const ButtonDelete = ({ id, idEquipment, idState, flag }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    flag === "area" && dispatch(deleteArea(id));
    flag === "equipment" && dispatch(deleteEquipment(idEquipment));
    flag === "state" && dispatch(deleteState(idState));
  };

  return (
    <>
      <button onClick={() => handleDelete()}>ELIMINAR</button>
    </>
  );
};
