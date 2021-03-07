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

// app.get('/informatie', (req, res) => {
//   const blogs = [
//     {title: 'Ik weet niet', snippet: 'het zal wel'},
//     {title: 'tweeee', snippet: 'het zal weltweeeee'},
//     {title: 'dreieeee', snippet: 'het drieeee wel'}
//   ]; 
//   res.render('pages/informatie', { title: 'ja', blogs });
// });

app.use(function(req, res) { res.status(404).render('pages/not-found.ejs')});

function interestShow(req, res){  
    res.render('pages/interest', {title: 'ja' });
  };

  function informatieShow(req, res){
    const interestView = [
      {leuk: 'Ik weet niet', omschrijving: 'het zal wel'},
      {leuk: 'tweeee', omschrijving: 'het zal weltweeeee'},
      {leuk: 'dreieeee', omschrijving: 'het drieeee wel'}
    ]; 
    res.render('pages/informatie', {interestView });
  };
  

app.listen(port, () => console.log(`app running on port: ${port}`));