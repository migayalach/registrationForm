// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { seachIdArea } from "../Redux/actions";

export const ButtonEdit = ({ id, flag }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    flag === "area" && dispatch(seachIdArea(id));
  };

  return (
    <>
      <button onClick={() => handleEdit(id)}>EDITAR</button>
    </>
  );
};
