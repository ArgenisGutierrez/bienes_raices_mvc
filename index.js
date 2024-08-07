import express from 'express';
import router from './routes/usuarioRoutes.js';

const app = express();

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
