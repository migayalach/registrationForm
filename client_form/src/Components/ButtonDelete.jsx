// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { deleteArea, deleteEquipment } from "../Redux/actions";

export const ButtonDelete = ({ id, idEquipment, flag }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    flag === "area" && dispatch(deleteArea(id));
    flag === "equipment" && dispatch(deleteEquipment(idEquipment));
  };

  return (
    <>
      <button onClick={() => handleDelete()}>ELIMINAR</button>
    </>
  );
};
