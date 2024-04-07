// Import any required models here
const Pedido = require('../models/pedido');


exports.count = async () => {
  return await Pedido.aggregate([{"$group":{_id:"$estado", count:{$sum:1}}}])
};

exports.create = async (patient, animal, doctor, date, status, derivator, description, diagnosis, healthCare, healtCareNumber, analysisList, print) => {
  var pedido = new Pedido({
      paciente: patient,
      animal: animal,
      medico: doctor,
      fecha: date,
      estado: status,
      derivador: derivator,
      derivadorDescripcion: description,
      diagnostico: diagnosis,
      obrasocial: healthCare,
      afiliado: healtCareNumber,
      analisisList: analysisList,
      imprimir: print
    });
  return await pedido.save()
};