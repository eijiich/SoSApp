const mongoose = require('mongoose');
const { Schema } = mongoose;

const cursoSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    imageUrl: String,
    imageAlt: String,
    price: String,
    professor: String,
    estrelas: String,
    tempo: String,
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;

