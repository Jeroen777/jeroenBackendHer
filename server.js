const express = require('express');
const app = express();
const ejs = require("ejs");
const slug = require("slug");
const bodyParser = require('body-parser');
const multer = require('multer');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 8000;

app.listen(port, () => console.log(`app running on port: ${port}`));