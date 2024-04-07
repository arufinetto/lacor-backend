// Import any required services or models here
const pedidoService = require('../services/pedidoService');
const { body, validationResult } = require('express-validator');


// Define your controller methods
exports.count = async (req, res) => {
  try {
    const result = await pedidoService.count();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' , cause: '' + error});
  }
};

exports.create = async(req, res) => {
try{
  const body = req.body
  const errors = validationResult(req); // Encuentra los errores de validación en esta solicitud y los envuelve en un objeto resultante de una práctica función

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  const result = await pedidoService.create(body.paciente, body.animal, body.medico, body.fecha, body.estado, body.derivador, body.descripcion, body.diagnostico, body.obrasocial, body.afiliado, body.analisisList, body.imprimir);
  res.json(result);
}catch(error){
  res.status(500).json({ error: 'Internal Server Error' , cause: '' + error});
}

async function validatePedido (req, res){
  if(req.body.paciente == null){
    res.status(400).json({ error: 'Paciente is required.' , cause: 'bad_request'});
  }
  }
}


exports.validate = (method) => {
  const requiredMessage = " is required";
  switch (method) {
    case 'create': {
     return [ 
        body('paciente', "Paciente" + requiredMessage).exists(),
        body('medico', "Medico" + requiredMessage).exists(),
        body('fecha', "Fecha" + requiredMessage).exists(),
        body('estado',"Estado" + requiredMessage ).exists(),
       ]   
    }
  }
}