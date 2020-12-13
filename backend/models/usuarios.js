const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String
});

const User = mongoose.model('Usuarios', UserSchema);

module.exports = User;