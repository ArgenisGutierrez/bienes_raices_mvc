import express from 'express';
import router from './routes/usuarioRoutes.js';
import db from './config/db.js';

const app = express();
//habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

//Conexion a la DB
try {
  await db.authenticate();
  db.sync()
  console.log('DB conectada exitosamente');
} catch (error) {
  console.log(error);
}

//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta publica
app.use(express.static('public'));

app.use('/auth', router)

const port = 3000;

app.listen(port, () => {
  console.log(`aplicacion lista en http://localhost:${port}`);
})
