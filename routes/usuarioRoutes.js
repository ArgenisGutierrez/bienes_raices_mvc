import express from 'express';
import { formularioLogin, formularioOlvidoPassword, formularioRegistro, registrar } from '../controllers/usuarioControllers.js';

const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.post("/registro", registrar);
router.get("/recovery", formularioOlvidoPassword);


export default router;
