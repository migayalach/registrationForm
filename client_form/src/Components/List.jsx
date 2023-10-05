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
  idUser,
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
            {/* ID'S */}
            {idState && <td>{idState}</td>}
            {idProcedures && <td>{idProcedures}</td>}
            {idEquipment && <td>{idEquipment}</td>}
            {idUnit && <td>{idUnit}</td>}
            {idUser && <td>{idUser}</td>}
            <td>{name}</td>
            {nroIdentification && <td>{nroIdentification}</td>}
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
