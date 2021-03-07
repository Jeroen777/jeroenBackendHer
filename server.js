const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Info = require('./models/informatieInterests');

const urlencodedParser = bodyParser.urlencoded({
  extended: false
});
const port = 8000;


require('dotenv').config()

const db = mongoose.connection;
//mongoose connecten met mijn database
//https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//testen of mongoos connected is
mongoose.connection.on('connected', () => {
  console.log("mongoose is connected");
});



app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")
app.set('views/pages', 'view')
app.get('/interest', interestShow)
app.get('/informatie', informatieShow)


app.use(function (req, res) {
  res.status(404).render('pages/not-found.ejs')
});

function interestShow(req, res) {
  res.render('pages/interest', {
    title: 'ja'
  });
};

function informatieShow(req, res) {
  const interestView = [{
      leuk: 'Ik weet niet',
      omschrijving: 'het zal wel'
    },
    {
      leuk: 'tweeee',
      omschrijving: 'het zal weltweeeee'
    },
    {
      leuk: 'dreieeee',
      omschrijving: 'het drieeee wel'
    }
  ];
  res.render('pages/informatie', {
    interestView
  });
};


app.listen(port, () => console.log(`app running on port: ${port}`));