// HOOS'K
import { useDispatch } from "react-redux";

// REDUX
import {
  deleteArea,
  deleteEquipment,
  deleteState,
  deleteProcedures,
  deleteUser,
  deleteCredential,
  deleteForm,
} from "../Redux/actions";

// LIBRERI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// STYLE SHEEETS
import styles from "../StyleSheets/List.module.css";

export const ButtonDelete = ({
  id,
  idEquipment,
  idState,
  idProcedures,
  idUser,
  idCredential,
  idForm,
  flag,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    flag === "area" && dispatch(deleteArea(id));
    flag === "equipment" && dispatch(deleteEquipment(idEquipment));
    flag === "state" && dispatch(deleteState(idState));
    flag === "procedures" && dispatch(deleteProcedures(idProcedures));
    flag === "user" && dispatch(deleteUser(idUser));
    flag === "credential" && dispatch(deleteCredential(idCredential));
    flag === "form" && dispatch(deleteForm(idForm));
  };

  return (
    <>
      {flag !== "userApi" && (
        <button
          onClick={() => handleDelete()}
          className={styles["icon-button"]}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            style={{ color: "#ff0000" }}
          />
        </button>
      )}
    </>
  );
};
