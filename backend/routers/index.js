var express = require('express');
var router = express.Router();

const authRouter = require('./authRouter');
const cursosRouter = require('./cursosRouter');

router.use('/auth', authRouter);
router.use('/cursos', cursosRouter);

module.exports = cursosRouter;