// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// REDUX

// STYLESHEET'S

export const CheckUTIC = ({ handleData }) => {
  const [check, setCheck] = useState(false);
  const selectCheck = useSelector((state) => state.auxExtra);
  const checkForm = selectCheck[0]?.checkForm;

  const handleChange = (event) => {
    setCheck(!check);
  };

  useEffect(() => {
    setCheck(checkForm);
  }, [checkForm]);

  useEffect(() => {
    handleData(check, "checkForm");
  }, [check]);

  return (
    <>
      <input
        type="checkbox"
        onChange={handleChange}
        name="checkForm"
        value={check}
        checked={check}
      />
    </>
  );
};
