//1.adding numbers
module.exports.add=function (a, b) {
  return a + b;
}



//2.string meassage
module.exports.sayHello=function (name) {
 return str   = "Hello "+name;
 
}



//3.object values 
module.exports.obj1 = {
  a: {
    b: 145
  }
};
module.exports.obj2 = {
  a: {
    b:"145"
  }
};



//4.testing the callback methods
module.exports.welcome=function (name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}



