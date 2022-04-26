const Sequelize = require('sequelize');
const categorias = require('../models').categoria;

const obtenerCategorias = async (req, res, next) => {
    try {
        const response = await categorias.findAll({});
        res.json({
            listado_categorias: response
        })
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }

}

const obtenerCategoria = (req, res, next) => {
    const categoriaId = req.params.id;
    res.json({message:`categoria con id: ${categoriaId}.`});
}


const crearCategoria = async (req, res, next) => {
    const body = req.body;
    try {
        const response = await categorias.create ({
            descripcion : body.descripcion,
        })
        res.json({
            nueva_categoria : response,
        });
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }
    
}

const actualizarCategoria = (req, res, next) => {
    const categoriaId = req.params.id;
    res.json({message:`Se actualizó la categoria con id: ${categoriaId}.`});
}

const eliminarCategoria = (req, res, next) => {
    const categoriaId = req.params.id;
    res.json({message:`Se eliminó la categoria con id: ${categoriaId}.`});
}

module.exports = {
    actualizarCategoria,
    crearCategoria,
    eliminarCategoria,
    obtenerCategoria,
    obtenerCategorias,
}