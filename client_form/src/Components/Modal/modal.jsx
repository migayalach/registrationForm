// COMPONET'S
import FormState from "../../Views/Forms/FormState/FormState";
import FormProcedures from "../../Views/Forms/FormProcedures/FormProcedures";
import FormEquipment from "../../Views/Forms/FormEquipment/FormEquipment";
import FormArea from "../../Views/Forms/FormArea/FormArea";
import FormUser from "../../Views/Forms/FormUser/FormUser";
import FormCredential from "../../Views/Forms/FormCredential/FormCredential";
import Form from "../../Views/Forms/Form/Form";

// HOOK'S
import React from "react";

// STYLESHEET'S
import "./modal.css";

const Modal = ({ onClose, isOpen, flagComponent }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {flagComponent === "state" && <FormState />}
            {flagComponent === "procedures" && <FormProcedures />}
            {flagComponent === "equipment" && <FormEquipment />}
            {flagComponent === "area" && <FormArea />}
            {flagComponent === "user" && <FormUser />}
            {flagComponent === "credential" && <FormCredential />}
            {flagComponent === "form" && <Form />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
