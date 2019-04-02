let mongoose = require("mongoose");
let tradeWin = require('../../app/models/user.model');
let app=require('../../app/routes/user.route.js')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
var expect = chai.expect();
chai.use(chaiHttp);

//user details
describe('/GET/register user registration', () => {
   it('it should create user registration fields', (done) => {
          let user={
             firstName : "john",
             lastName:"phinny",
             password  :"phinny$23!",
             email: "john123@gmail.com",
             phoneNumber : 8877995542,
             role:"user"
             }
        chai.request('http://localhost:4080/api')
            .post('/register')
            .send(user)
            .end((err, res) => {
              // console.log("resp",res)
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('user');
                  res.body.should.have.property('role');
                  res.body.should.have.property('status');
                  res.body.should.have.property('message');
                  res.body.should.have.property('token');
                  done();
            });
      });
      
   // it('it should create login details',(done)=>{
   //    let userinfo={
   //        email:"john123@gmail.com",
   //        password:"phinny$23!"
   //       }
   //    chai.request('http://localhost:4080/api')
   //  .post('/login')
   //  .send(userinfo)
   //  .end((error,res)=>{
   //    // console.log("response",res)
   //    res.should.have.status(200)
   //    res.body.should.be.a('object');
   //    res.body.should.have.property('auth');
   //    res.body.should.have.property('email');
   //    res.body.should.have.property('status');
   //    res.body.should.have.property('message');
   //    res.body.should.have.property('token');
 
   //          })
   //       })
   
      })
 


