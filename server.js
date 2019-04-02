
// Imported  database connection file
require('./app/models/db.connection')

const express = require('express');
const path = require('path');
//add body parser
const bodyParser = require('body-parser');
//create express application object
var app = express();
//importsd routes
var productsRoutes = require('./app/routes/products.route');
var userRoutes = require('./app/routes/user.route');

//setting a port for server
app.set('port',4080);

//setting host for server 
app.set('host','127.0.0.1');

//allow to use static directory 
app.use(express.static(path.join(__dirname,'public')));

//Allow Request Body.
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//print every request in server.
app.use(function(req,res,next){
  console.log(req.method , req.url);

  //allow cros origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
  //call next methods in pipeline
  next();
});

//map get request on '/' uri
app.get('/',(req,res)=>{
  console.log("Got a GET request for the /");
	res.send('Hello World');
});


//Mapping Products Routes after api url.
app.use('/api',productsRoutes);

//Mapping User Routes after api url.
app.use('/api',userRoutes);

//generate and listen server .
app.listen(app.get('port'),app.get('host'),function () {
  console.log("Magic happens on port " +app.get('port'));
});

console.log("After Start Server");
