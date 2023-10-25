export const clearName = (data) =>
  data.map(({ idUnit, nameUnit }) => ({
    idUnit,
    name: nameUnit,
  }));

// LIMPIEZA FORM HIGH
export const clearDataHigh = (data) => {
  const obj = {
    idUser: data[0]?.idUser,
    idState: parseInt(data.idState),
    nameProcedures: "alta",
    credential: data.dataSend,
    equipment: clearArray([
      data.equipment.idEquipment ? data.equipment : null,
      data.equipment2.idEquipment ? data.equipment2 : null,
    ]),
  };
  return obj;
};

const clearArray = (array) => {
  const aux = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      aux.push(array[i]);
    }
  }
  return aux;
};

export const dataSend = (data) => {
  const credential = data.combinedData.dataSend;
  const equipment1 = data.combinedData.equipment;
  const equipment2 = data.combinedData.equipment2;
  const equipment = [equipment1, equipment2];

  return {
    idForm: data.idForm,
    idUser: data.idUser,
    idState: data.idState,
    idProcedures: data.idProcedures,
    credential,
    equipment,
  };
};
