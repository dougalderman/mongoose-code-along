var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ingredientCtrl = require('./controllers/ingredientCtrl');

var app = express();

app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost:27017/tacos';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log("Successfully connected to mongodb")
})

app.post('/api/ingredient', ingredientCtrl.create);
app.get('/api/ingredient', ingredientCtrl.read);

var portId = 3000;
app.listen(portId, function() {
    console.log('listening on port ', portId);      
})