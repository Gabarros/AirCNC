const Spot = require('../models/Spot');

module.exports = {

    async store(req, res){

        console.log(req.body);
        console.log('Foto', req.file);        
        return res.json({
            ok: true
        });
    }
}