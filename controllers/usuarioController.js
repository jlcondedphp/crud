const Usuario = require('../model/Usuario')

// Mostrar
exports.mostrar = async (req, res) => {
    try {
        const UsuarioQuery = await Usuario.find({})
        //console.log(UsuarioQuery)
        return res.render('index', { usuarios: UsuarioQuery })
    } catch (error) {
        res.send("Hubo un problema con la consulta")
    }
}

//Crear
module.exports.crear = async (req, res) => {
    try {
        console.log(req.body)
        const usuario = new Usuario({
            nombre: req.body.nombre,
            edad: req.body.edad
        })
        const usuarioCreado = await usuario.save();
    } catch (error) {
        res.send("Error al crear el Usuario")
    }
    res.redirect('/')
}

//Editar
module.exports.editar = async (req, res) => {
    try {
        console.log(req.body)
        const id = req.body.id_editar
        const nombre = req.body.nombre_editar
        const edad = req.body.edad_editar

        const usuarioActualizado = await Usuario.findOneAndUpdate(id, { nombre, edad }, { new: true })
        //return res.status(200).json({ message: 'usuario actualizado correctamente', usuario: usuarioActualizado })

        //return res.render('index', { usuarios: UsuarioActualizado })
    } catch (error) {
        res.status(500).send("Error actualizando el Usuario")
    }
    res.redirect('/')
}

//Borrar
module.exports.borrar = async (req, res) => {
    try {
        console.log(req.body)
        const id = req.params.id

        const UsuarioBorrado = await Usuario.findOneAndDelete(id)
        //return res.status(200).json({ message: 'usuario eliminado correctamente', usuario: UsuarioBorrado })
    } catch (error) {
        res.status(500).send("Error eliminando el Usuario")
    }
    res.redirect('/')
}