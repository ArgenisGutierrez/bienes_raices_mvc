import Usuario from '../models/Usuario.js';

const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesion'
  })
}

const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina: 'Crear Cuenta'
  })
}

const registrar = async (req, res) => {
  const { nombre, email, password, repetir_password } = req.body
  const newUsuario = {
    nombre,
    email,
    password
  };
  const usuario = await Usuario.create(newUsuario);
  res.json(usuario);
}

const formularioOlvidoPassword = (req, res) => {
  res.render('auth/recovery', {
    pagina: 'Recuperar Cuenta'
  })
}

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidoPassword,
  registrar
}
