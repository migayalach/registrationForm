// COMPONET'S
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";
import Modal from "../../Components/Modal/modal";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// REDUX
import { getAllCredential } from "../../Redux/actions";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const Credential = () => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);
  const selectorFilter = useSelector((state) => state.filter);
  const selectStateCredential = useSelector(
    (state) => state.errors || state.success
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllCredential());
  }, [dispatch]);

  useEffect(() => {
    if (selectStateCredential) {
      if (selectStateCredential.credential === false) {
        swalMessage(selectStateCredential.error, "warning");
      } else if (selectStateCredential.credential === true) {
        toastSuccess(selectStateCredential.message, "success");
      }
    }
  }, [selectStateCredential]);

  return (
    <>
      <div className="buttonContainer">
        <button onClick={openModal} className="buttonCrear">
          Crear
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          flagComponent="credential"
        />
      </div>
      <hr />
      <Filter />
      <hr />
      <Lists
        items={selectorFilter ? selectorFilter : selectorCredential}
        text={"Credenciales"}
        flag={"credential"}
      />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default Credential;
