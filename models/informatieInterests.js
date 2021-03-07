const mongoose = require('mongoose');

// voor de structuur in de collection
const Schema = mongoose.Schema;

//Schema structuur opbouwen uit informatie
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
const Info = mongoose.model('Info', infoSchema);
module.exports = Info;