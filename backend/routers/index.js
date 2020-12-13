var express = require('express');
var router = express.Router();
const cursosController = require('../controllers/cursosController');

const cursosRouter = require('./cursosRouter');

//router.use('/cursos', cursosRouter);

module.exports = cursosRouter;