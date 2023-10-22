// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { seachIdArea, getIdEquipment, getIdState, getIdProcedures, getIdUser, getIdCredential } from "../Redux/actions";

export const ButtonEdit = ({ id, idEquipment, idState, idProcedures, idUser, idCredential, flag }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    flag === "area" && dispatch(seachIdArea(id));
    flag === "equipment" && dispatch(getIdEquipment(idEquipment));
    flag === "state" && dispatch(getIdState(idState))
    flag === "procedures" && dispatch(getIdProcedures(idProcedures));
    flag === "user" && dispatch(getIdUser(idUser));
    flag === "credential" && dispatch(getIdCredential(idCredential));
  };

  return (
    <>
      {id && <button onClick={() => handleEdit(id)}>EDITAR</button>}
      {idEquipment && (<button onClick={() => handleEdit(idEquipment)}>EDITAR</button>)}
      {idState && <button onClick={() => handleEdit(idEquipment)}>EDITAR</button>}
      {idProcedures && <button onClick={() => handleEdit(idProcedures)}>EDITAR</button>}
      {idUser && <button onClick={() => handleEdit(idUser)}>EDITAR</button>}
      {idCredential &&<button onClick={() => handleEdit(idCredential)}>XXX</button>}
    </>
  );
};
