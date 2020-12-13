const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const apiRouter = require('../routers/index');
const Curso = require('../models/cursosModel');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/cursos', apiRouter);


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});