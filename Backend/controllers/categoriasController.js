const obtenerCategorias = (req, res, next) => {
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
}

const obtenerCategoria = (req, res, next) => {
    const categoriaId = req.params.id;
    res.json({message:`categoria con id: ${categoriaId}.`});
}


const crearCategoria = (req, res, next) => {
    const body = req.body;
    res.json({
        nuevaCategoria : body,
    });
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