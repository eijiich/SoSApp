const Curso = require('../models/cursosModel');

const cursoService = {
    create: async (title, subtitle, description,
        imageUrl, imageAlt, price, professor, estrelas, tempo) => {
        console.log('Creating course - Service');
        const createdCurso = await Curso.create({
            title,
            subtitle,
            description,
            imageUrl,
            imageAlt,
            price,
            professor,
            estrelas,
            tempo,
        });
        return createdCurso;
    },
    findById: async (id) => {
        console.log('Find course - Service');
        const curso = await Curso.findOne({ _id: id }).exec();

        return curso;
    },
    find: async () => {
        console.log('All courses - Service');
        const cursos = await Curso.find({});
        return cursos;
    },
    updateById: async ({ id, title, subtitle, description,
        imageUrl, imageAlt, price, professor, estrelas, tempo }) => {

        const curso = await Curso.findOneAndUpdate({ _id: id }, {
            title,
            subtitle,
            description,
            imageUrl,
            imageAlt,
            price,
            professor,
            estrelas,
            tempo
        }, { new: true });

        return curso;
    },
    deleteById: async (id) => {

        const curso = await Curso.findOneAndDelete({ _id: id });
        return curso;
    }
}

module.exports = cursoService;