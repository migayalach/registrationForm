// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { seachIdArea, getIdEquipment, getIdState } from "../Redux/actions";

export const ButtonEdit = ({ id, idEquipment, idState, flag }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    flag === "area" && dispatch(seachIdArea(id));
    flag === "equipment" && dispatch(getIdEquipment(idEquipment));
    flag === "state" && dispatch(getIdState(idState))
  };

  return (
    <>
      {id && <button onClick={() => handleEdit(id)}>EDITAR</button>}
      {idEquipment && (<button onClick={() => handleEdit(idEquipment)}>EDITAR</button>)}
      {idState && <button onClick={() => handleEdit(idEquipment)}>EDITAR</button>}
    </>
  );
};
