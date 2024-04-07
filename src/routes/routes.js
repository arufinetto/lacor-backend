const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Define your routes
router.get('/pedido/count', pedidoController.count);
router.post('/pedido', pedidoController.validate('create'), pedidoController.create);

module.exports = router;