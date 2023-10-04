export const clearName = (data) =>
  data.map(({ idUnit, nameUnit }) => ({
    idUnit,
    name: nameUnit,
  }));
