const clearResponseOne = ({
  idUser,
  name,
  nroIdentification,
  email,
  phone,
  charge,
}) => ({
  idUser,
  name,
  nroIdentification,
  email,
  phone,
  charge,
});

const clearData = (dataDuplicate) =>
  (newDataObj = {
    nroIdentification: parseInt(dataDuplicate.nroIdentification),
    email: dataDuplicate.email,
  });

const duplicateInfo = (dataDuplicate, dataInput) => {
  for (const i in dataDuplicate) {
    for (const j in dataInput) {
      if (dataDuplicate[i] === dataInput[j]) {
        return dataInput[j];
      }
    }
  }
  return 0;
};

const dataClear = (data) =>
  data.map(({ name, nroIdentification, email, phone, charge }) => ({
    name,
    nroIdentification,
    email,
    phone,
    charge,
  }));

module.exports = {
  clearResponseOne,
  clearData,
  duplicateInfo,
  dataClear,
};
