var express = require('express');
var router  = express.Router();
const categoriasController = require('../controllers/categoriasController');

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

router.get('/:id', categoriasController.obtenerCategoria);

router.post('/create', categoriasController.crearCategoria);

router.put('/update/:id', categoriasController.actualizarCategoria);

router.delete('/delete/:id', categoriasController.eliminarCategoria);


module.exports = router;