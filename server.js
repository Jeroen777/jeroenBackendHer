const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');
// const mongo = require('mongodb');
const mongoose = require('mongoose');
const Inter = require('./models/informatieInterests');


const port = 8000;

//connecten met mongodb + testen of de connectie lukt


// require('dotenv').config()

// const db = mongoose.connection;
// //mongoose connecten met mijn database
// //https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables
// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// //testen of mongoos connected is
// mongoose.connection.on('connected', () => {
//   console.log("mongoose is connected");
// });

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set('views/pages', 'view');

app.get('/', informatieShow);
app.get('/interest', interestShow);
app.get('/interest/nieuw', nieuwInterest);
app.get('/:id', linkPagina);

app.post('/', formPost);

function formPost(req, res){
  const inter = new Inter(req.body);

  inter.save()
  .then((result) => {
 res.redirect('/');
  })
};

function linkPagina (req, res) {
  const id = req.params.id;
  Inter.findById(id)
  .then(result => {
    res.render('pages/extraInformatie',{Xinfo: result, title: "Extra informatie"})
  })
};

function interestShow(req, res) {
  res.render('pages/interest', { title: 'jaaaa' });
};

function informatieShow(req, res) {
  Inter.find()
  .then((result) => {
    res.render('pages/informatie',{ title: 'alle informatie', interestView: result})
  })
};

function nieuwInterest (req, res){
  res.render('create', {title: 'Nieuwe interesse toevoegen'});
};





app.use(function (req, res) {
  res.status(404).render('pages/not-found.ejs')
});
app.listen(port, () => console.log(`app running on port: ${port}`));