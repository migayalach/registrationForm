// COMPONET'S

// HOOK'S

// STYLESHEET'S

const List = ({
  index,
  idState,
  idProcedures,
  idEquipment,
  idUnit,
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
      <table border={1}>
        <tbody>
          <tr>
            <td>{index}</td>
            {idState && <td>{idState}</td>}
            {idProcedures && <td>{idProcedures}</td>}
            {idEquipment && <td>{idEquipment}</td>}
            {idUnit && <td>{idUnit}</td>}
            {idUser && <td>{idUser}</td>}
            {idCredential && <td>{idCredential}</td>}
            {name && <td>{name}</td>}
            {user && <td>{user}</td>}
            {nameUser && <td>{nameUser}</td>}
            {emailUser && <td>{emailUser}</td>}
            {nroIdentification && <td>{nroIdentification}</td>}
            {nameUnit && <td>{nameUnit}</td>}
            {phone && <td>{phone}</td>}
            {email && <td>{email}</td>}
            {charge && <td>{charge}</td>}
            <td>
              <button>Ver</button>
            </td>
            <td>
              <button>Editar</button>
            </td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default List;
