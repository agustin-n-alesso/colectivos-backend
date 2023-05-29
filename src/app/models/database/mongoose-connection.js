//Importaciones
const mongoose = require('mongoose');

//exporto directamente la conexión a la DB establecida
module.exports = mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
	.then(() => console.log('Base de datos conectada'))
	.catch(error => console.log(error));