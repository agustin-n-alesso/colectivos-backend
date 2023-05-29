const express = require('express');
const { crearLocalidad, modificarLocalidad, eliminarLocalidad, obtenerLocalidades } = require('../../controllers/localidades');
const RUTAS_LOCALIDADES = express.Router();

RUTAS_LOCALIDADES.route('/')
	.get(obtenerLocalidades)
	.post(crearLocalidad)
	.put(modificarLocalidad)
	.delete(eliminarLocalidad)

module.exports = RUTAS_LOCALIDADES;