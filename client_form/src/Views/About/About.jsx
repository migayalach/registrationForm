// COMPONET'S
import FormUser from "../Forms/FormUser/FormUser";
import { ButtonEdit } from "../../Components/ButtonEdit";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getNameUser } from "../../Redux/actions";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const About = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.auxUser);
  const userInfo = useSelector((state) => state.user);
  const selectStateUser = useSelector((state) => state.errors || state.success);
  const nameUser = selectUser[0]?.name;
  const idUser = userInfo[0]?.idUser;

  useEffect(() => {
    dispatch(getNameUser(nameUser));
  }, [nameUser]);

  useEffect(() => {
    if (selectStateUser) {
      if (selectStateUser.user === false) {
        swalMessage(selectStateUser.error, "warning");
      } else if (selectStateUser.user === true) {
        toastSuccess(selectStateUser.message, "success");
      }
    }
  }, [selectStateUser]);

  return (
    <>
      <FormUser />
      <h3>Mi informacion personal</h3>
      <span>{nameUser}</span>
      <span>Actualizar datos: </span>
      <ButtonEdit idUser={idUser} flag="user" />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default About;
