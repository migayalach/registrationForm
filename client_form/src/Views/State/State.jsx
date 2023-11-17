// COMPONET'S
import Lists from "../../Components/Lists";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllState } from "../../Redux/actions";

// REDUX

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import Modal from "./modal";
import { ToastContainer } from "react-toastify";

// STYLESHEET'S
import styles from "./state.module.css";

const State = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.stateForm);
  const selectState = useSelector((state) => state.errors || state.success);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllState());
  }, [dispatch]);

  useEffect(() => {
    if (selectState) {
      if (selectState.state === false) {
        swalMessage(selectState.error, "warning");
      } else if (selectState.state === true) {
        toastSuccess(selectState.message, "success");
      }
    }
  }, [selectState]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h3>Crear Formulario:</h3>
      <div className={styles.buttonContainer}>
        <button onClick={openModal} className={styles.buttonCrear}>
          Crear
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <hr />
      <h2>ESTADOS</h2>
      <Lists items={selectorState} text={"Estados"} flag={"state"} />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </div>
  );
};

export default State;
