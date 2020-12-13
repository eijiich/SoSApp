var express = require('express');
var router = express.Router();
const cursosController = require('../controllers/cursosController');

router.post('/', cursosController.create);

router.get('/:id', cursosController.findById);

router.get('/', cursosController.find);

router.put('/:id', cursosController.updateById);

router.delete('/:id', cursosController.deleteById);

module.exports = router;