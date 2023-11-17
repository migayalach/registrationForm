// COMPONEN'S
import { ButtonEdit } from "../Components/ButtonEdit";
import { ButtonDelete } from "../Components/ButtonDelete";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// REDUX

// STYLE SHEEETS
import styles from "../StyleSheets/List.module.css"; // Importa las clases de estilo

const List = ({
  index,
  idState,
  idProcedures,
  idEquipment,
  idUnit,
  idForm,
  dateStart,
  dateEnd,
  procedure,
  state,
  procedures,
  name,
  nameUser,
  nameUnit,
  emailUser,
  user,
  idUser,
  idCredential,
  nroIdentification,
  phone,
  email,
  charge,
  flag,
}) => {
  const selecSearhArea = useSelector((state) => state.aux || state.area);
  const selUserData = useSelector((state) => state.auxUser);
  const selArea = useSelector((state) => state.area);
  const area = selArea.map(({ nameUnit }) => nameUnit);
  const userArea = selUserData[0]?.unit;
  const resulData = area.find((index) => index === userArea);
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
            {dateEnd ? <td>{dateEnd.substring(0, 10)}</td> : <td></td>}
            {procedure && <td>{procedure}</td>}
            {state && <td>{state}</td>}
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
              <ButtonEdit
                id={idUnit}
                idEquipment={idEquipment}
                idState={idState}
                idProcedures={idProcedures}
                idUser={idUser}
                idCredential={idCredential}
                idForm={idForm}
                flag={flag}
              />
            </td>

            <td className={styles.smallCell}>
              {resulData === "UTIC" && (
                <ButtonDelete
                  id={idUnit}
                  idEquipment={idEquipment}
                  idState={idState}
                  idProcedures={idProcedures}
                  idUser={idUser}
                  idCredential={idCredential}
                  idForm={idForm}
                  flag={flag}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default List;
