// COMPONET'S
import Lists from "../../Components/Lists";
import Modal from "../../Components/Modal/modal";

// HOOK'S
import { useEffect, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <div className="buttonContainer">
        <button onClick={openModal} className="buttonCrear">
          Crear
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        flagComponent="equipment"
      />
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
