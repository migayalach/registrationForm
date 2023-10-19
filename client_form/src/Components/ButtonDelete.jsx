// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import { deleteArea } from "../Redux/actions";

export const ButtonDelete = ({ id, flag }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    flag === "area" && dispatch(deleteArea(id));
  };

  return (
    <>
      <button onClick={() => handleDelete(id)}>ELIMINAR</button>
    </>
  );
};
