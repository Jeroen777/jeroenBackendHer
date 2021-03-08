const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const Inter = require('./models/informatieInterests'); //import schema

const port = 8000;

require('dotenv').config()

const db = mongoose.connection;
//mongoose connecten met mijn database
//https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//testing if mongoos is connected
mongoose.connection.on('connected', () => {
  console.log("mongoose is connected");
});


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); //To link with new ID url's

app.set("view engine", "ejs");
app.set('views/pages', 'view');

//routes
app.get('/', informatieShow);
app.get('/interest', interestShow);
app.get('/interest/nieuw', nieuwInterest);
app.get('/:id', linkPagina);

app.post('/', formPost);

//functions

//function to post new interest and save in DB
function formPost(req, res){
  const inter = new Inter(req.body);

  inter.save()
  .then((result) => {
 res.redirect('/');
  })
};

//function detail page of an interest with a unique ID
function linkPagina (req, res) {
  const id = req.params.id;
  Inter.findById(id)
  .then(result => {
    res.render('pages/extraInformatie',{Xinfo: result, title: "Extra informatie"})
  })
  .catch(error => {
    res.render('pages/not-found.ejs');
  });

};

//function render interest page
function interestShow(req, res) {
  res.render('pages/interest');
};

//function find data render on the informatie page
function informatieShow(req, res) {
  Inter.find()
  .then((result) => {
    res.render('pages/informatie',{ title: 'alle informatie', interestView: result})
  })
};

//function add new data to informatie page
function nieuwInterest (req, res){
  res.render('maakNieuwe');
};


//404 pagina
app.use(function (req, res) {
  res.status(404).render('pages/not-found.ejs')
});

//loggen welke port er gebruikt woord
app.listen(port, () => console.log(`app running on port: ${port}`));