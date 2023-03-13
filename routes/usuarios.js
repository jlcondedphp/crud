const express = require('express')
const router = express.Router()

const usuarioController = require('../controllers/usuarioController')

//Mostrar todos los usuarios(GET)
router.get('/', usuarioController.mostrar)


//Crear usuarios(POST)
router.post('/crear', usuarioController.crear)


//Editar usuarios(POST)
router.post('/editar', usuarioController.editar)


//Editar usuarios(GET)
router.get('/borrar/:id', usuarioController.borrar)


module.exports = router