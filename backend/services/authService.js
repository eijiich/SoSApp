const bcrypt= require('bcrypt');

const User = require('../models/authModel');

const userService = {
    signup: async (email, password) => {
        console.log('Creating user - Service');
        const user = await User.findOne({ email: email });

        if(user) {
            return null;
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await User.create({
            email,
            password: hash,
        });
        
        return createdUser;
    },
    signin: async (email, password) => {
        console.log('Singin user - Service');
        const user = await User.findOne({ email: email });

        if(!bcrypt.compareSync(password, user.password)) {
            return null;
        }

        return user;
    }
}

module.exports = userService;