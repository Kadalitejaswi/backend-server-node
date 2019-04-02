var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstName : {
     type:String,
     min:6,
     max:20},
  lastName:String,
  password  :
  {
    type:String,
    required:true,
    min:6,
    max:15
  },
  email: {
    type:String,
    unique:true
  },
  phoneNumber : Number,
  role:{
    type:String,
    "default":'user'
  },
  isActive:{
    type:Boolean,
    "default":false
  }
 

})
 mongoose.model('User',userSchema,'tradewin.userinfo');