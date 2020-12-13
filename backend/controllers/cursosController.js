const cursosService = require('../services/cursosService');

const cursosController = {
    create: async (req, res) => {
        console.log('Creating course');
        const title = req.body.title;
        const subtitle = req.body.subtitle;
        const description = req.body.description;
        const imageUrl = req.body.imageUrl;
        const imageAlt = req.body.imageAlt;
        const price = req.body.price;
        const professor = req.body.professor;
        const estrelas = req.body.estrelas;
        const tempo = req.body.tempo;
        const createdCurso = await cursosService.create({
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
        return res.json('POST /cursos');
    },
    findById: async (req, res) => {
        console.log('Finding course');
        const id = req.params.id;

        const curso = await cursosService.findById(id);

        return res.json(curso);
    },
    find: async (req, res) => {
        console.log('All courses');
        const cursos = await cursosService.find({});
        return res.json(cursos);
    },
    updateById: async (req, res) => {
        console.log('Updating course');
        const id = req.params.id;
        const title = req.body.title;
        const subtitle = req.body.subtitle;
        const description = req.body.description;
        const imageUrl = req.body.imageUrl;
        const imageAlt = req.body.imageAlt;
        const price = req.body.price;
        const professor = req.body.professor;
        const estrelas = req.body.estrelas;
        const tempo = req.body.tempo;

        const curso = await cursosService.updateById({
            id,
            title,
            subtitle,
            description,
            imageUrl,
            imageAlt,
            price,
            professor,
            estrelas,
            tempo
        });

        return res.json(curso);
    },
    deleteById: async (req, res) => {
        console.log('Deleting course');
        const id = req.params.id;
        const curso = await cursosService.deleteById(id);
        return res.json(curso);
    }
}

module.exports = cursosController;