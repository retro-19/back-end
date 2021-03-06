const express = require('express'); 
const mongoose = require('mongoose');
const cors = require( 'cors');
const bodyParser = require('body-parser');


require('dotenv').config();

const app = express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(require('./routes/index'));
const dbConfig = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false };

mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
    if (err)
        console.error("Error ❌");
    else
        console.log("Connected to the real db ✅");
});

module.exports = app;