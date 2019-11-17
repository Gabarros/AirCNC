const mongoose = require('mongoose');

// Criação do Schema utilizado pelo mongoose
const UserSchema = new mongoose.Schema({
    email: String

});

// Exportando o schema
module.exports = mongoose.model('User', UserSchema);


