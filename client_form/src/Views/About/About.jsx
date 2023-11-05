// COMPONET'S

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { editUser, getNameUser } from "../../Redux/actions";

// JAVASCRIP

// STYLESHEET'S

const About = () => {
  const selectUser = useSelector((state) => state.auxUser);
  const nameUser = selectUser[0].name;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNameUser(nameUser));
  }, [nameUser]);

  return (
    <>
      <h3>Mi informacion personal</h3>
      <span>{nameUser}</span>
    </>
  );
};

export default About;
