import express from 'express';
import { formularioLogin, formularioOlvidoPassword, formularioRegistro } from '../controllers/usuarioControllers.js';

const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/recovery", formularioOlvidoPassword);


export default router;
