const authService = require('../services/authService');

const authController = {
    signup: async (req, res) => {
        console.log('User signup');
        const email = req.body.email;
        const password = req.body.password;

        const createdUser = await authService.signup(email, password);
        if(!createdUser){
            return res.status(400).json();
        }

        return res.json(createdUser);
    },
    signin: async (req, res) => {
        console.log('User signin');
        const email = req.body.email;
        const password = req.body.password;

        const user = await authService.signin(email, password);
        if(!user){
            return res.status(401).json();
        }

        return res.json(user);
    }
};

module.exports = authController;