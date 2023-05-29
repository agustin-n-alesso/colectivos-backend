require('dotenv').config();
require('./src/app/models/database/mongoose-connection');
const Localidades = require('./src/app/models/database/tables/localidades');

const express = require('express');
const app = express();

app.use(express.json());

app.route('/').get((req,res) => {
	res.send({ message: 'Hola Mundo' });
})

app.route('/guardar-dato-ejemplo').post( async (req,res) => {
	const { body:datos } = req;
	const nuevaLocalidad = new Localidades({...datos});
	const documento = await nuevaLocalidad.save();
	res.send({...documento});
})

app.listen(process.env.PORT,() => {
	console.log(`Servidor escuchando en puerto: ${process.env.PORT}`);
})