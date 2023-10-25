// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllEquipment } from "../../Redux/actions";

// STYLESHEET'S

const EquipmentData = ({ onDataUserApiChange }) => {
  const dispatch = useDispatch();
  const selectorEquipment = useSelector((state) => state.equipment);
  const selectorAuxEx = useSelector((state) => state.auxExtra);
  let initialIdEquipment = "";
  let initialDataHos = "";
  let initialDataP = "";
  let initialEtiquetaControl = "";
  let initialIdEquipment2 = "";
  let initialDataHos2 = "";
  let initialDataP2 = "";
  let initialEtiquetaControl2 = "";

  if (selectorAuxEx.length > 0) {
    initialIdEquipment = selectorAuxEx[0].equipment[0]?.idEquipment;
    initialDataHos = selectorAuxEx[0].equipment[0]?.dataHos;
    initialDataP = selectorAuxEx[0].equipment[0]?.dataP;
    initialEtiquetaControl = selectorAuxEx[0].equipment[0]?.control;

    initialIdEquipment2 = selectorAuxEx[0].equipment[1]?.idEquipment;
    initialDataHos2 = selectorAuxEx[0].equipment[1]?.dataHos;
    initialDataP2 = selectorAuxEx[0].equipment[1]?.dataP;
    initialEtiquetaControl2 = selectorAuxEx[0].equipment[1]?.control;
  }

  const [equipment, setEquipment] = useState({
    idEquipment: initialIdEquipment,
    dataHos: initialDataHos,
    dataP: initialDataP,
    etiquetaControl: initialEtiquetaControl,
  });

  const handleChange = (event) => {
    setEquipment({
      ...equipment,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });

    onDataUserApiChange({
      equipment,
      equipment2,
    });
  };

  useEffect(() => {
    setEquipment({
      idEquipment: initialIdEquipment,
      dataHos: initialDataHos,
      dataP: initialDataP,
      etiquetaControl: initialEtiquetaControl,
    });
  }, [
    initialIdEquipment,
    initialDataHos,
    initialDataP,
    initialEtiquetaControl,
  ]);

  // DOS
  const selectorEquipment2 = useSelector((state) => state.equipment);
  const [equipment2, setEquipment2] = useState({
    idEquipment: initialIdEquipment2,
    dataHos: initialDataHos2,
    dataP: initialDataP2,
    etiquetaControl: initialEtiquetaControl2,
  });

  const handleChange2 = (event) => {
    setEquipment2({
      ...equipment2,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
    onDataUserApiChange({
      equipment,
      equipment2,
    });
  };

  useEffect(() => {
    setEquipment2({
      idEquipment: initialIdEquipment2,
      dataHos: initialDataHos2,
      dataP: initialDataP2,
      etiquetaControl: initialEtiquetaControl2,
    });
  }, [
    initialIdEquipment2,
    initialDataHos2,
    initialDataP2,
    initialEtiquetaControl2,
  ]);

  useEffect(() => {
    dispatch(getAllEquipment());
  }, []);

  return (
    <>
      <p>2.- Equipos de computación</p>
      <div>
        <select
          name="idEquipment"
          value={equipment.idEquipment}
          onChange={handleChange}
        >
          <option></option>
          {selectorEquipment.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="host">Host: </label>
        <input
          type="text"
          name="dataHos"
          value={equipment.dataHos}
          onChange={handleChange}
        />
        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="dataP"
          value={equipment.dataP}
          onChange={handleChange}
        />
        <label htmlFor="control">Etiqueta de control: </label>
        <input
          type="checkbox"
          name="etiquetaControl"
          checked={equipment.etiquetaControl}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <hr />

      <div>
        <select
          name="idEquipment"
          value={equipment2.idEquipment}
          onChange={handleChange2}
        >
          <option></option>
          {selectorEquipment2.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="host">Host: </label>
        <input
          type="text"
          name="dataHos"
          value={equipment2.dataHos}
          onChange={handleChange2}
        />
        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="dataP"
          value={equipment2.dataP}
          onChange={handleChange2}
        />
        <label htmlFor="control">Etiqueta de control: </label>
        <input
          type="checkbox"
          name="etiquetaControl"
          checked={equipment2.etiquetaControl}
          onChange={(event) => handleChange2(event)}
        />
      </div>
      <span>¿Esta seguro de esta información?: </span>
      <input type="checkbox" onChange={(event) => handleChange2(event)} />
    </>
  );
};

export default EquipmentData;
