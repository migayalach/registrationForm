// COMPONET'S
import FormState from "../Forms/FormState/FormState";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllState } from "../../Redux/actions";

// REDUX

// STYLESHEET'S
import styles from "./state.module.css";

// LIBRARY
import Modal from "./modal"; // Importa el componente Modal
import Swal from "sweetalert2";

const State = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.stateForm);
  const errorValidate = useSelector((state) => state.errors);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllState());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.state === false &&
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: errorValidate.error,
      });
  }, [errorValidate]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <Filter />
      <hr /> */}
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
    </div>
  );
};

export default State;
