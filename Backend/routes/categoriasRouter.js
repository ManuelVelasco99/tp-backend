var express = require('express');
var router  = express.Router();
const categoriasController = require('../controllers/categoriasController');
const { check,param, validationResult } = require('express-validator');


/* GET categorias */
/*router.get('', function(req, res, next){
    res.json({categorias : [
        {
            id: 1,
            descripcion: 'categoria 1'
        },
        {
            id: 2,
            descripcion: 'categoria 2',
        },
    ]});
});
*/

router.get('', categoriasController.obtenerCategorias);

router.get('/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.') ,categoriasController.obtenerCategoria);

router.post('/create',check('descripcion').notEmpty().withMessage('El campo descripcion es requerido').isString().withMessage('El campo descripcion debe ser de tipo string.'), categoriasController.crearCategoria);

router.put('/update/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.'), check('descripcion').notEmpty().withMessage('El campo descripcion es requerido').isString().withMessage('El campo descripcion debe ser de tipo string.'), categoriasController.actualizarCategoria);

router.delete('/delete/:id', param('id').isInt({min:1}).withMessage('El valor debe ser númerico y mayor a 0.'), categoriasController.eliminarCategoria);


module.exports = router;