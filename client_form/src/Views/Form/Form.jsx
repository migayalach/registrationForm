import TableUserApi from "../../Components/Table/TableUserApi/TableUserApi";
import TableEquipment from "../../Components/Table/TableEquipment/TableEquipment";
import TableCredential from "../../Components/Table/TableCredential/TableCredential";

const Form = () => {
  return (
    <div>
      <h1>Formulario de Alta de Usuarios</h1>
      <h3>FORM-UTIC-001</h3>
      <TableUserApi />
      <TableEquipment />
      <TableCredential />
    </div>
  );
};

export default Form;
