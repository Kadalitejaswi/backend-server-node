var CONFIG =require("../config/config");
var mongoose = require('mongoose')
var User =mongoose.model('User');
const jwt=require('jsonwebtoken');
const bcryptjs =require("bcryptjs");

// Registration with JWT And password bcryptjs 
module.exports.registration=(req,res)=>{
  // Store hashSync in your password DB.
  var password = bcryptjs.hashSync(req.body.password);
  var user = new User({
      firstName:req.body.firstName,
      email:req.body.email,
      password:password,
      phoneNumber:req.body.number
       });
  // console.log("user=",user)
  user.save(function(err,doc){
    // console.log("doc=",doc)
    if(err) {
      return res.status(500).send({
        auth:false,
        message:"Failed to register a user email is taken"
      });
    }
  console.log("id=",doc._id+"key= ",CONFIG.AUTHKEY);
    //token is generated and it will be expired in 1hour
  var token = jwt.sign({_id:doc._id},CONFIG.AUTHKEY,{expiresIn:3600});
    res.status(200)
    .send({
      auth:true,
      user:user.firstName,
      role:user.role,
      status:user.isActive,
      message:"Registration successful",
      token:token
    });
  })
}

//login with bcrypt and JWT 
module.exports.login=(req,res)=>{
  // console.log(req.body);
    if(!req.body.email || !req.body.password){
      return res.status(500).send({
        message:"Username and Password can not be Empty",
        auth:false
      })
    }
      User.findOne({email:req.body.email},function(err,user){
      if(err) return res.status(500).send({
        auth:false,
        message:"Internal server Error"
      });
      if(!user) return res.status(404).send({
        auth:false,
        message:"Not a Register User get Registered it's Free"
      });
      // Load hashSync from your password DB.
      var isPwdMatch = bcryptjs.compareSync(req.body.password,user.password)
      if (!isPwdMatch){
        return res.status(401).send({
          auth:false,
          message:"Password Not Match",
          token:null
        })
      }
      //token is generated and it will be expired in 1hour
      var token = jwt.sign({_id:user._id},CONFIG.AUTHKEY,{expiresIn:3600})
      res.status(200)
      .send({
        auth:true,
        user:user.firstName,
        email:user.email,
        role:user.role,
        status:user.isActive,
        message:"Login Successful",
        token:token
          })
      })
    }

module.exports.authenticator=(req,res,next)=>{
  var token = req.headers['x-access-token'];
  if(!token){
    res.status(404).json({
      auth:false,
      message:"Token Not Found !",
      data:null
    });
  }else{
     // verify a token symmetric
    jwt.verify(token,CONFIG.AUTHKEY,function(error,doc){
      if(error){
        res.status(401).json({
          auth:false,
          message:"Failed to authenticate Token {Unautherized}",
          data:null
        })
      }else{
        User.findById(doc._id,{password:false},function(err,user){
          if(err){
            res
             .status(500)
             .json({
              auth:false,
              message:"Failed to Fetch User",
              data:null
            })
          }if(!user){
            res
             .status(404)
             .json({
                auth:false,
                message:"User Not Found {Unautherized}",
                data:null
              });
          }else{
            // res.status(200).send(user);
            next();
          }
        });
      }
    })
  }

}




