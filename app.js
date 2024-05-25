require('dotenv').config();  // Load environment variables from .env file

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use body-parser to parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

const http = require('http').Server(app);

http.listen(3000, function(){
    console.log('Server is running on port 3000');
});
