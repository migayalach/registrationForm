// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllCredential } from "../../Redux/actions";

// STYLESHEET'S

const CredentialData = ({ onDataUserApiChange }) => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);

  const [dataSend, setDataSend] = useState([]);

  // UNO
  const [data, setData] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage = (event) => {
    const newData = {
      idCredential: event.target.id,
      check:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };

    if (!newData.check) {
      setDataSend((prevDataSend) =>
        prevDataSend.filter(
          (item) => item.idCredential !== newData.idCredential
        )
      );
    } else {
      setDataSend((prevDataSend) => [...prevDataSend, newData]);
    }

    setData({
      ...data,
      [event.target.name]: newData.check,
    });

    onDataUserApiChange({
      dataSend,
    });
  };

  // DOS
  const [data1, setData1] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage1 = (event) => {
    const newData = {
      idCredential: event.target.id,
      check:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };

    if (!newData.check) {
      setDataSend((prevDataSend) =>
        prevDataSend.filter(
          (item) => item.idCredential !== newData.idCredential
        )
      );
    } else {
      setDataSend((prevDataSend) => [...prevDataSend, newData]);
    }

    setData1({
      ...data1,
      [event.target.name]: newData.check,
    });
    onDataUserApiChange({
      dataSend,
    });
  };

  // TRES
  const [data2, setData2] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage2 = (event) => {
    const newData = {
      idCredential: event.target.id,
      check:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };

    if (!newData.check) {
      setDataSend((prevDataSend) =>
        prevDataSend.filter(
          (item) => item.idCredential !== newData.idCredential
        )
      );
    } else {
      setDataSend((prevDataSend) => [...prevDataSend, newData]);
    }

    setData2({
      ...data2,
      [event.target.name]: newData.check,
    });
    onDataUserApiChange({
      dataSend,
    });
  };

  // CUATRO
  const [data3, setData3] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage3 = (event) => {
    const newData = {
      idCredential: event.target.id,
      check:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };

    if (!newData.check) {
      setDataSend((prevDataSend) =>
        prevDataSend.filter(
          (item) => item.idCredential !== newData.idCredential
        )
      );
    } else {
      setDataSend((prevDataSend) => [...prevDataSend, newData]);
    }

    setData3({
      ...data3,
      [event.target.name]: newData.check,
    });
    onDataUserApiChange({
      dataSend,
    });
  };

  // CINCO
  const [data4, setData4] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage4 = (event) => {
    const newData = {
      idCredential: event.target.id,
      check:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };

    if (!newData.check) {
      setDataSend((prevDataSend) =>
        prevDataSend.filter(
          (item) => item.idCredential !== newData.idCredential
        )
      );
    } else {
      setDataSend((prevDataSend) => [...prevDataSend, newData]);
    }

    setData4({
      ...data4,
      [event.target.name]: newData.check,
    });

    onDataUserApiChange({
      dataSend,
    });
  };

  useEffect(() => {
    dispatch(getAllCredential());
  }, []);

  // console.log(dataSend);

  return (
    <>
      <p>3.- Credenciales de acceso</p>
      {selectorCredential[0] && selectorCredential[0].name ? (
        <div>
          <label htmlFor="inputField">{selectorCredential[0].name}: </label>
          <input
            type="checkbox"
            id={selectorCredential[0].idCredential}
            name="check"
            checked={data.check}
            onChange={handleChage}
          />
        </div>
      ) : null}

      {selectorCredential[1] && selectorCredential[1].name ? (
        <div>
          <label htmlFor="inputField">{selectorCredential[1].name}: </label>
          <input
            type="checkbox"
            id={selectorCredential[1].idCredential}
            name="check"
            checked={data1.check}
            onChange={handleChage1}
          />
        </div>
      ) : null}

      {selectorCredential[2] && selectorCredential[2].name ? (
        <div>
          <label htmlFor="inputField">{selectorCredential[2].name}: </label>
          <input
            type="checkbox"
            id={selectorCredential[2].idCredential}
            name="check"
            checked={data2.check}
            onChange={handleChage2}
          />
        </div>
      ) : null}

      {selectorCredential[3] && selectorCredential[3].name ? (
        <div>
          <label htmlFor="inputField">{selectorCredential[3].name}: </label>
          <input
            type="checkbox"
            id={selectorCredential[3].idCredential}
            name="check"
            checked={data3.check}
            onChange={handleChage3}
          />
        </div>
      ) : null}

      {selectorCredential[4] && selectorCredential[4].name ? (
        <div>
          <label htmlFor="inputField">{selectorCredential[4].name}: </label>
          <input
            type="checkbox"
            id={selectorCredential[4].idCredential}
            name="check"
            checked={data4.check}
            onChange={handleChage4}
          />
        </div>
      ) : null}
      <span>¿Esta seguro de esta información?: </span>
      <input type="checkbox" onChange={(event) => (handleChage(event))} />
    </>
  );
};

export default CredentialData;
