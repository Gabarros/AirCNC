// Using multer and the node path module for capture the path of images

const multer = require('multer');
const path = require('path');


module.exports = {

    // Using multer for save files in diskStore (the folder called uploads)
    storage: multer.diskStorage({
        // Setting the destination directory
        destination: path.resolve(__dirname,'..', '..', 'uploads'),
        // Catching the File Name of the picture
        filename: (req, file, callback)=>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            callback(null, `${name}-${Date.now()}${ext}`);
        }
    }),

};