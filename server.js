const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect('mongodb://yoonsub:5814tatter@ds121163.mlab.com:21163/heroku_gdcbxq13', {useNewUrlParser: true});

require('./routes/api-routes')(app);

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}`);
});