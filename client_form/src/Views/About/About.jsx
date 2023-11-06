// COMPONET'S
import FormUser from "../Forms/FormUser/FormUser";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getNameUser, editUser } from "../../Redux/actions";

// JAVASCRIP

// STYLESHEET'S

const About = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.auxUser);
  const nameUser = selectUser[0]?.name;

  useEffect(() => {
    dispatch(getNameUser(nameUser));
  }, [nameUser]);

  return (
    <>
      <h3>Mi informacion personal</h3>
      <span>{nameUser}</span>
      <FormUser />
    </>
  );
};

export default About;
