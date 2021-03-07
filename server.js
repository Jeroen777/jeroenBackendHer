const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")
app.set('views/pages', 'view')
app.get('/interest', interestShow)
app.get('/informatie', informatieShow)
app.get('/', keuzesMaken);
app.get('pages/', keuzesMaken);
app.use(function(req, res) { res.status(404).render('pages/not-found.ejs')});

//formulier keuzes maken
function keuzesMaken(req, res){ 
    res.render('pages/keuzes');
  };

function interestShow(req, res){ 
    res.render('pages/interest');
  };

  function informatieShow(req, res){ 
    res.render('pages/informatie');
  };
  
  app.post('/keuzes', urlencodedParser, function(req, res){ 
    console.log(req.body);
    res.render('pages/keuzes-gelukt', {data: req.body});
  });

app.listen(port, () => console.log(`app running on port: ${port}`));