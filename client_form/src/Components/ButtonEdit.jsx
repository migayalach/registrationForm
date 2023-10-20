// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { seachIdArea, getIdEquipment } from "../Redux/actions";

export const ButtonEdit = ({ id, idEquipment, flag }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    flag === "area" && dispatch(seachIdArea(id));
    flag === "equipment" && dispatch(getIdEquipment(idEquipment));
  };

  return (
    <>
      {id && <button onClick={() => handleEdit(id)}>EDITAR</button>}
      {idEquipment && (
        <button onClick={() => handleEdit(idEquipment)}>EDITAR</button>
      )}
    </>
  );
};
