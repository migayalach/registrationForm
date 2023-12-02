// COMPONET'S
import FilterForm from "../../Components/FilterForm/FilterForm";
import Lists from "../../Components/Lists";
import Modal from "../../Components/Modal/modal";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllForm } from "../../Redux/actions";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const FormView = () => {
  const dispatch = useDispatch();
  const selecForm = useSelector((state) => state.form);
  const selecStateForm = useSelector((state) => state.errors || state.success);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllForm());
  }, [dispatch]);

  useEffect(() => {
    selecForm[0]?.message === "No se encontraron datos" &&
      swalMessage("No se encontraron datos", "info");
  }, [selecForm]);

  useEffect(() => {
    if (selecStateForm) {
      if (selecStateForm.form === false) {
        swalMessage(`Por favor ingresa datos`, "warning");
      } else if (selecStateForm.form === true) {
        toastSuccess(selecStateForm.message, "success");
      }
    }
  }, [selecStateForm]);

  return (
    <>
      <div className="buttonContainer">
        <button onClick={openModal} className="buttonCrear">
          Crear
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} flagComponent="form" />
      </div>
      <FilterForm />
      <Lists items={selecForm} text={"formularios"} flag={"form"} />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default FormView;
