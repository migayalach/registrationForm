const nameClear = (obj) => obj[0];

const clearResponseGet = (obj) =>
  obj.map((form) => ({
    idForm: form.idForm,
    dateStart: form.dateStart,
    dateEnd: form.dateEnd,
    state: nameClear(form.States.map(({ name }) => name)),
    procedure: nameClear(form.Procedures.map(({ name }) => name)),
    nameUser: nameClear(form.UserApis.map(({ name }) => name)),
  }));

module.exports = {
  nameClear,
  clearResponseGet,
};
