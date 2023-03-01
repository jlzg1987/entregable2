const express = require('express')
const db = require('./src/utils/database')
const toDo = require('./src/models/toDo.models')
//const cors = request('cors')
const cors = require("cors");
const toDoRoutes = require('./src/routers/toDo.routes')
const { request } = require('express')
toDo;
const PORT = 8000;

db.authenticate()
    .then(() => { console.log("conectado a la base de datos") })
    .catch(() => { console.log(error) });
db.sync({froce:false})
    .then(() => { console.log("conectado a la base de dato sincronizado") })
    .catch((error) => { console.log(error) });

const app = express();
app.use(cors());
app.use(express.json());

app.use(toDoRoutes);

app.get('/', (req, res) => {
    res.send("Bienvenido al servidor")
})

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
})