// COMPONEN'S
import { ButtonEdit } from "../Components/ButtonEdit";
import { ButtonDelete } from "../Components/ButtonDelete";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { seachIdArea } from "../Redux/actions";

// STYLE SHEEETS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./List.module.css"; // Importa las clases de estilo

const List = ({
  index,
  idState,
  idProcedures,
  idEquipment,
  idUnit,
  idForm,
  dateStart,
  procedures,
  name,
  nameUser,
  nameUnit,
  Unit,
  emailUser,
  user,
  idUser,
  idCredential,
  nroIdentification,
  phone,
  email,
  charge,
  onEditData,
  flag,
}) => {
  const dispatch = useDispatch();
  const selecSearhArea = useSelector((state) => state.aux || state.area);
  const [dataAux, setDataAux] = useState([]);

  useEffect(() => {
    setDataAux(selecSearhArea);
  }, [selecSearhArea, dataAux]);

  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.smallCell}>{index}</td>
            {idState && <td className={styles.smallCell}>{idState}</td>}
            {idProcedures && <td>{idProcedures}</td>}
            {idEquipment && <td>{idEquipment}</td>}
            {idUnit && <td>{idUnit}</td>}
            {idUser && <td>{idUser}</td>}
            {idCredential && <td>{idCredential}</td>}
            {idForm && <td>{idForm}</td>}
            {dateStart && <td>{dateStart.substring(0, 10)}</td>}
            {procedures && <td>{procedures}</td>}
            {name && <td className={styles.largeCell}>{name}</td>}
            {user && <td className={styles.smallCell}>{user}</td>}
            {nameUser && <td>{nameUser}</td>}
            {emailUser && <td>{emailUser}</td>}
            {nroIdentification && <td>{nroIdentification}</td>}
            {nameUnit && <td>{nameUnit}</td>}
            {phone && <td>{phone}</td>}
            {email && <td>{email}</td>}
            {charge && <td>{charge}</td>}
            <td className={styles.smallCell}>
              <button className={styles["icon-button"]}>
                <FontAwesomeIcon icon="fa-solid fa-eye" />
              </button>
            </td>
            <td className={styles.smallCell}>
              {/* EDITAR */}
              {/* <button
                className={styles["icon-button"]}
                // onClick={() => handleChangeId(idUnit)}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-pen"
                  style={{ color: "#0055ff" }}
                />
              </button> */}
              <ButtonEdit
                id={idUnit}
                idEquipment={idEquipment}
                idState={idState}
                idProcedures={idProcedures}
                idUser={idUser}
                flag={flag}
              />
            </td>

            {/* ELIMINAR */}
            <td className={styles.smallCell}>
              {/* <button className={styles["icon-button"]}>
                <FontAwesomeIcon
                  icon="fa-solid fa-trash"
                  style={{ color: "#ff0000" }}
                />
              </button> */}
              <ButtonDelete
                id={idUnit}
                idEquipment={idEquipment}
                idState={idState}
                idProcedures={idProcedures}
                idUser={idUser}
                idCredential={idCredential}
                flag={flag}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default List;
