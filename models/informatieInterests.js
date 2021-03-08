const mongoose = require('mongoose');

//Structure in the collection 
const Schema = mongoose.Schema;

//https://mongoosejs.com/docs/guide.html
//Schema structure how to save in the collection
//Objects with a string and all are required
const infoSchema = new Schema({
    vraagEen: {
        type: String,
        required: true
    },
    vraagTwee: {
        type: String,
        required: true
    },
    vraagDrie: {
        type: String,
        required: true
    }
});

//mongoose model, Info terugvinden, model gebaseerd op de Schema
//export to use in server.js
const Inter = mongoose.model('Inter', infoSchema);
module.exports = Inter;