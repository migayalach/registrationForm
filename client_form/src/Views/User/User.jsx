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
import { getAllUser } from "../../Redux/actions";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const User = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((state) => state.user);
  const selectorFilter = useSelector((state) => state.filter);
  const selectStateUser = useSelector((state) => state.errors || state.success);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    if (selectStateUser) {
      if (selectStateUser.user === false) {
        swalMessage(selectStateUser.error, "warning");
      } else if (selectStateUser.user === true) {
        toastSuccess(selectStateUser.message, "success");
      } else if (selectStateUser.userSearch === false) {
        toastSuccess(selectStateUser.message, "error");
      }
    }
  }, [selectStateUser]);

  return (
    <>
      <div className="buttonContainer">
        <button onClick={openModal} className="buttonCrear">
          Crear
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} flagComponent="user" />
      </div>
      <hr />
      <Filter />
      <hr />
      <Lists
        items={selectorFilter ? selectorFilter : selectorUser}
        text={"Usuarios"}
        flag={"user"}
      />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default User;
