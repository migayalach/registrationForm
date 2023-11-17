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
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const Equipment = () => {
  const dispatch = useDispatch();
  const selectorEquipment = useSelector((state) => state.equipment);
  const stateEquipment = useSelector((state) => state.errors || state.success);

  useEffect(() => {
    dispatch(getAllEquipment());
  }, [dispatch]);

  useEffect(() => {
    if (stateEquipment) {
      if (stateEquipment.equipment === false) {
        swalMessage(stateEquipment.error, "warning");
      } else if (stateEquipment.equipment === true) {
        toastSuccess(stateEquipment.message, "success");
      }
    }
  }, [stateEquipment]);

  return (
    <>
      {/* <Filter />
      <hr /> */}
      <FormEquipment />
      <hr />
      <Lists items={selectorEquipment} text={"Equipo"} flag={"equipment"} />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default Equipment;
