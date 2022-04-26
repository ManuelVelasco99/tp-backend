const Sequelize = require('sequelize');
const categorias = require('../models').categoria;

const obtenerCategorias = async (req, res, next) => {
    try {
        const response = await categorias.findAll({});
        return res.json({
            listado_categorias: response
        })
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }

}

const obtenerCategoria = async (req, res, next) => {
    const categoriaId = req.params.id;
    try {
        const response = await categorias.findByPk(categoriaId);
        if(response){
            return res.json({
                categoria : response,
            });
        }
        return res.json({
            message: 'Categoría no encontrada.'
        });
    } 
    catch (error) {
        res.json({
            message: error,
        });
    }
}


const crearCategoria = async (req, res, next) => {
    const body = req.body;
    try {
        const response = await categorias.create ({
            descripcion : body.descripcion,
        })
        return res.json({
            nueva_categoria : response,
        });
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }
    
}

const actualizarCategoria = async(req, res, next) => {
    const categoriaId = req.params.id;
    const nuevaDescripcion = req.body.descripcion;
    try {
        const response = await categorias.update(
            {descripcion: nuevaDescripcion},
            {where: {id: categoriaId}}
        );
        if(response === 0){
            return res.json({
                message: 'No se pudo actualizar la categoría.',
            });
        }
        return res.json({
            message : 'Categoría actualizada con éxito',
        });
    } 
    catch (error) {
        res.json({
            error: error,
        });
    }
}

const eliminarCategoria = async(req, res, next) => {
    const categoriaId = req.params.id;
    try {
        const response = await categorias.update(
            {eliminado: 1},
            {where: {id: categoriaId}}
        );
        if(response === 0){
            return res.json({
                message: 'No se pudo eliminar la categoría.',
            });
        }
        return res.json({
            message : 'Categoría eliminada con éxito',
        });
    } 
    catch (error) {
        res.json({
            error: error,
        });
    }
}

module.exports = {
    actualizarCategoria,
    crearCategoria,
    eliminarCategoria,
    obtenerCategoria,
    obtenerCategorias,
}