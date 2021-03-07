const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');
// const mongo = require('mongodb');
const mongoose = require('mongoose');
const Inter = require('./models/informatieInterests');

const urlencodedParser = bodyParser.urlencoded({
  extended: false
});
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
app.set("view engine", "ejs")
app.set('views/pages', 'view')
app.get('/interest', interestShow)
app.get('/informatie', informatieShow)

//zoeken naar Interest collection en opslaan in interest collection
app.get('/toevoegen', (req, res) => {
  const inter = new Inter({
    title: 'nieuwe informatie',
    snippet: 'meer info ding',
    body: 'body van dit ding'
  });

  inter.save()
  .then((result)=> {
    res.send(result)
  })
});

//Vind alle ingevulgde interests uit de collection (direct op Inter)
app.get('/alle-toevoegingen', (req, res) => {
  Inter.find()
  .then((result) => {
    res.send(result);
  })
});

//vind een enkele toegevoegde interesse met ID
app.get('/een-toevoeging', (req, res) => {
  Inter.findById('60452848fb5358b3591c6a09')
  .then((result) => {
    res.send(result)
  });
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

app.use(function (req, res) {
  res.status(404).render('pages/not-found.ejs')
});
app.listen(port, () => console.log(`app running on port: ${port}`));