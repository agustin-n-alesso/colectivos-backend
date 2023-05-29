require('dotenv').config();
const express = require('express');
const RUTAS_LOCALIDADES = require('./src/app/routes/localidades');

// MONGODB
require('./src/app/models/database/mongoose-connection');

const app = express();
app.use(express.json());
app.use('/localidades', RUTAS_LOCALIDADES);

app.listen(process.env.PORT,() => {
	console.log(`Servidor escuchando en puerto: ${process.env.PORT}`);
})