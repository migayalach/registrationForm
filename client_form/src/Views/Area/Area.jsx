// COMPONET'S
import Lists from "../../Components/Lists";
import Modal from "../../Components/Modal/modal";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP
import { clearName } from "../../Utils/clearFunctions";
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// REDUX
import { getAllArea } from "../../Redux/actions";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S
import "react-toastify/dist/ReactToastify.css";

const Area = () => {
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);
  const stateResponse = useSelector((state) => state.errors || state.success);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllArea());
  }, [dispatch]);

  useEffect(() => {
    if (stateResponse) {
      if (stateResponse.unit === false) {
        swalMessage(stateResponse.error, "warning");
      } else if (stateResponse.unit === true) {
        toastSuccess(stateResponse.message, "success");
      }
    }
  }, [stateResponse]);

  return (
    <>
      <div className="buttonContainer">
        <button onClick={openModal} className="buttonCrear">
          Crear
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} flagComponent="area" />
      </div>
      <hr />
      <Lists items={clearName(selectorArea)} text={"Área"} flag={"area"} />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default Area;
