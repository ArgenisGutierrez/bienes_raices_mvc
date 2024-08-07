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
const formularioOlvidoPassword = (req, res) => {
  res.render('auth/recovery', {
    pagina: 'Recuperar Cuenta'
  })
}

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidoPassword
}
