const sucursales = require('../models').Sucursales;
const { validationResult } = require('express-validator');

const obtenerSucursales = async (req, res, next) => {
    try {
        const response = await sucursales.findAll({});
        return res.json({
            listado_sucursales: response
        })
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }

}

const obtenerSucursal = async (req, res, next) => {
    if(!validationResult(req).isEmpty()){
        const result = validationResult(req);
        return res.status(400).json({
            status: 400,
            error: 'Bad Request',
            message: result.errors,
        });
    }
    const sucursalId = req.params.id;
    try {
        const response = await sucursales.findByPk(sucursalId);
        if(response){
            return res.json({
                sucursal : response,
            });
        }
        return res.json({
            message: 'Sucursal no encontrada.'
        });
    } 
    catch (error) {
        res.json({
            message: error,
        });
    }
}


const crearSucursal = async (req, res, next) => {
    const body = req.body;
    if(!validationResult(req).isEmpty()){
        const result = validationResult(req);
        return res.status(400).json({
            status: 400,
            error: 'Bad Request',
            message: result.errors,
        });
    }
    try {
        const response = await sucursales.create ({
            nombre : body.nombre,
        })
        return res.json({
            nueva_sucursal : response,
        });
    } 
    catch (error) {
        res.json({
            message : error,
        });
    }
    
}

const actualizarSucursal = async(req, res, next) => {
    const sucursalId = req.params.id;
    if(!validationResult(req).isEmpty()){
        const result = validationResult(req);
        return res.status(400).json({
            status: 400,
            error: 'Bad Request',
            message: result.errors,
        });
    }
    const nuevoNombre = req.body.nombre;
    try {
        const [response] = await sucursales.update(
            {nombre: nuevoNombre},
            {where: {id: sucursalId}}
        );
        if(response === 0){
            return res.json({
                message: 'No se pudo actualizar la sucursal.',
            });
        }
        return res.json({
            message : 'Sucursal actualizada con éxito', 
            response : response,
        });
    } 
    catch (error) {
        res.json({
            error: error,
        });
    }
}

const eliminarSucursal = async(req, res, next) => {
    const sucursalId = req.params.id;
    if(!validationResult(req).isEmpty()){
        const result = validationResult(req);
        return res.status(400).json({
            status: 400,
            error: 'Bad Request',
            message: result.errors,
        });
    }
    try {
        const [response] = await sucursales.update(
            {eliminado: 1},
            {where: {id: sucursalId}}
        );
        if(response === 0){
            return res.json({
                message: 'No se pudo eliminar la sucursal.',
            });
        }
        return res.json({
            message : 'Sucursal eliminada con éxito',
        });
    } 
    catch (error) {
        res.json({
            error: error,
        });
    }
}

module.exports = {
    actualizarSucursal,
    crearSucursal,
    eliminarSucursal,
    obtenerSucursal,
    obtenerSucursales,
}