const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    return res.json({
        nome: 'Gabriel',
        email: 'gabarros17@gmail.com'
    })

});

app.listen(3000);