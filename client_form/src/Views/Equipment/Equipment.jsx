// COMPONET'S
import FormEquipment from "../Forms/FormEquipment/FormEquipment";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllEquipment } from "../../Redux/actions";

// JAVASCRIP

// LIBRARY
import Swal from "sweetalert2";

// STYLESHEET'S

const Equipment = () => {
  const dispatch = useDispatch();
  const selectorEquipment = useSelector((state) => state.equipment);
  const errorValidate = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getAllEquipment());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.equipment === false &&
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: errorValidate.error,
      });
  }, [errorValidate]);

  return (
    <>
      {/* <Filter />
      <hr /> */}
      <FormEquipment />
      <hr />
      <Lists items={selectorEquipment} text={"Equipo"} flag={"equipment"} />
    </>
  );
};

export default Equipment;
