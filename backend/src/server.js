const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://desenvolvedor:desenvolvimento123@cluster0-gedzb.mongodb.net/aircnc?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acess requisition body (for creation and edition)


// Necessário para requisições em JSON
app.use(express.json());

// Usando o Router
app.use(routes);


app.listen(3000);