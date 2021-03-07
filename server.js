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
const dbURI = 'mongodb+srv://jeroen:Stabij123@cluster0.8prdp.mongodb.net/dateAppJeroen?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

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



//zoeken naar Info collection en opslaan in interest collection
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
  .catch((err) => {
    console.log(err);
  })
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