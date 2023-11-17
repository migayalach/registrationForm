// COMPONET'S
import FormState from "../Forms/FormState/FormState";

// HOOK'S
import React from "react";

// STYLESHEET'S
import styles from "./modal.module.css";

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
