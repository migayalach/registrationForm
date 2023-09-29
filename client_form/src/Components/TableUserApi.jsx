const TableUserApi = () => {
  return (
    <div>
      <p>1.- Datos del servidor público: </p>
      <table border="1">
        <tr>
          <td>Nombre: </td>
          <td colspan="3">Fila 1, Columna 2</td>
        </tr>
        <tr>
          <td>Cargo: </td>
          <td colspan="3">Fila 1, Columna 2</td>
        </tr>
        <tr>
          <td>Ubicación (Oficina): </td>
          <td colspan="3">Fila 1, Columna 2</td>
        </tr>
        <tr>
          <td>Fecha de inicio: </td>
          <td>Fila 4, Columna 2</td>
          <td>Fecha de archivo: </td>
          <td>Fila 4, Columna 4</td>
        </tr>
      </table>
    </div>
  );
};

export default TableUserApi;
