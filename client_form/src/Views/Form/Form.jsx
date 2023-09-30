import TableUserApi from "../../Components/TableUserApi";
import TableEquipment from "../../Components/TableEquipment";
import TableCredential from "../../Components/TableCredential";

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