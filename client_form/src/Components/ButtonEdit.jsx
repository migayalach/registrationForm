// HOOS'K
import { useDispatch } from "react-redux";

// LIBRERI
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// REDUX
import {
  seachIdArea,
  getIdEquipment,
  getIdState,
  getIdProcedures,
  getIdUser,
  getIdCredential,
  getIdForm,
} from "../Redux/actions";

// STYLE SHEEETS
import styles from "../StyleSheets/List.module.css";

export const ButtonEdit = ({
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

  const handleEdit = () => {
    flag === "area" && dispatch(seachIdArea(id));
    flag === "equipment" && dispatch(getIdEquipment(idEquipment));
    flag === "state" && dispatch(getIdState(idState));
    flag === "procedures" && dispatch(getIdProcedures(idProcedures));
    flag === "user" && dispatch(getIdUser(idUser));
    flag === "credential" && dispatch(getIdCredential(idCredential));
    flag === "form" && dispatch(getIdForm(idForm));
  };

  return (
    <>
      {flag !== "userApi" && (
        <button onClick={() => handleEdit()} className={styles["icon-button"]}>
          <FontAwesomeIcon
            icon="fa-solid fa-eye"
            style={{ color: "#3d5a80" }}
          />
        </button>
      )}
    </>
  );
};
