const crearLocalidad = (req, res) => {
	// logica de crear una localidad
	res.json({
		mensaje: 'Creando localidad'
	})
}

const modificarLocalidad = (req, res) => {
	// logica de modificar una localidad
	res.json({
		mensaje: 'Modificando localidad'
	})
}

const eliminarLocalidad = (req, res) => {
	// logica de eliminar una localidad
	res.json({
		mensaje: 'Eliminando localidad'
	})
}

const obtenerLocalidades = (req, res) => {
	// logica de obtener localidades
	res.json({
		mensaje: 'Obteniendo localidades'
	})
}

module.exports = {
	crearLocalidad,
	modificarLocalidad,
	eliminarLocalidad,
	obtenerLocalidades
}