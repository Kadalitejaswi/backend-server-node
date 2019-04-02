const mongoose = require('mongoose');
const CONFIG = require('../config/config');
//we requiring mongoose model schema
require('./products.model.js');
require('./user.model.js');
  const option = {
  user : CONFIG.USER,
  pass :  CONFIG.PASS,
  authSource:CONFIG.AUTH
}
module.exports = mongoose.connect(CONFIG.DBURL,option,function(err){
  if(err){
    console.log("err=>",err.name)
  }
});
var db = mongoose.connection;
db.on('error',console.error
.bind(console, 'Connection Erorr: Connection Failed!'));

db.once('open', () => {
  console.log("Mongooose Connection SuccessFull!!");
});
process.once('SIGUSR2', function() {
  gracefullShutdown(' nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2')
  });
});
 //SIGINT is for terminating the process
 //The default behavior is to terminate the process, 
 //but it can be caught or ignored.it's for graceful shutdown(<Ctrl>+C)
process.on('SIGINT', function() {
  gracefullShutdown(' App terminating signal (SIGINT) ', () => {
    process.exit(0);
  });
});
//The SIGTERM signal used to cause program termination.
//this signal can be blocked, handled, and ignored.
process.on('SIGTERM', function() {
  gracefullShutdown(' App terminating signal (SIGTERM)', () => {
    process.exit(0);
  });
});

function gracefullShutdown(message, callback) {
  mongoose.connection.close(function() {
    console.log("Mongooose is DisConnected with App Termination");
    console.log("Connection Intruption by" + message);
    callback();
  });
}
