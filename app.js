//import hhtp core module
const http = require('http');
//set port and host 
const host = '127.0.0.1';
const port = 3030;
// generate server with http module.
const server = http.createServer(function(req,res){ 

  //Routing http methods
  if(req.url == '/home'){

    res.setHeader('Content-Type','text/plain');
    res.statusCode =200;;
    res.end('Hello Home Page Here !');

  }else if(req.url == '/users'){

    res.setHeader('Content-Type','text/html');
    res.statusCode =200;;
    res.end('<h1>Hello User Page Here ! </h1>');

  }else if(req.url == '/data'){

    res.setHeader('Content-Type','text/plain');
    res.statusCode =200;;
    res.end('<h1>Hello User Data Here ! </h1>');

  }else if(req.url == '/json'){

    res.setHeader('Content-Type','application/json');
    res.statusCode =200;;
    res.end("See the Header for media type json");
    
  }else if(req.url == '/other'){

    res.setHeader('Content-Type','text/html');
    res.statusCode =200;;
    res.end('<h1>Hello other Page Here ! </h1>');

  }
  
});
//listen server on given port and host
server.listen(port,host,function(){
  console.log("Server is Runnint on "+host+":"+port);
});
