// COMPONET'S

// HOOK'S

// STYLESHEET'S

const List = ({ index, idState, name, view, editState, deleteState }) => {
  return (
    <>
      <table border={1}>
        <tbody>
          <tr>
            <td>{index}</td>
            <td>{name}</td>
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
