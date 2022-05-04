var express = require('express');
var router  = express.Router();
const sucursalesController = require('../controllers/sucursalesController');
const { check,param, validationResult } = require('express-validator');

router.get('', sucursalesController.obtenerSucursales);

router.get('/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.') ,sucursalesController.obtenerSucursal);

router.post('/create',check('nombre').notEmpty().withMessage('El campo nombre es requerido').isString().withMessage('El campo nombre debe ser de tipo string.'), sucursalesController.crearSucursal);

router.put('/update/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.'), check('nombre').notEmpty().withMessage('El campo nombre es requerido').isString().withMessage('El campo nombre debe ser de tipo string.'), sucursalesController.actualizarSucursal);

router.delete('/delete/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.'), sucursalesController.eliminarSucursal);

module.exports = router;