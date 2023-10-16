import React from "react";
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
  view,
  editState,
  deleteState,
}) => {
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
              <button className={styles["icon-button"]}>
                <FontAwesomeIcon
                  icon="fa-solid fa-pen"
                  style={{ color: "#0055ff" }}
                />
              </button>
            </td>
            <td className={styles.smallCell}>
              <button className={styles["icon-button"]}>
                <FontAwesomeIcon
                  icon="fa-solid fa-trash"
                  style={{ color: "#ff0000" }}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default List;
