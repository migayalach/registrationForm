import React from "react";

import styles from "./modal.module.css";
import FormState from "../Forms/FormState/FormState";

const Modal = ({ onClose, isOpen }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles["close-button"]} onClick={closeModal}>
              &times;
            </span>
            <FormState />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
