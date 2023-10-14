export const clearName = (data) =>
  data.map(({ idUnit, nameUnit }) => ({
    idUnit,
    name: nameUnit,
  }));


// LIMPIEZA FORM HIGH
export const clearDataHigh = (data) => {
  const obj = {
    idUser: data[0]?.idUser,
    name: "alta",
    credendia: data.dataSend,
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