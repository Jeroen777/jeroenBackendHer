const mongoose = require('mongoose');

//Structure in the collection 
const Schema = mongoose.Schema;

//Schema structure how to save in the collection
const infoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

//mongoose model, Info terugvinden, model gebaseerd op de Schema
const Inter = mongoose.model('Inter', infoSchema);
module.exports = Inter;