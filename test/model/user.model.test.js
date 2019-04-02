
// const dbconn=require('../../app/models/db.connection')
const chai = require('chai')
const expect = chai.expect;
var mongoose=require('mongoose')
// var Trade = require('../app/model/tradewin.model.js');
var User = mongoose.model('User');
describe('user model', () => {
 
it('should have properties ', (done) => {
        var user = new User({
          firstName : "john",
          lastName:"phinny",
          password  :"phinny$23!",
          email: "john56@gmail.com",
          phoneNumber : 8877995542,
          role:"user",
		  isActive:false


    });
expect(user).to.be.an('object');
expect(user).to.have.property('firstName')
expect(user).to.have.property('lastName');
expect(user).to.have.property('password');
expect(user).to.have.property('email');
expect(user).to.have.property('role');
expect(user).to.have.property('isActive');
expect('firstName').to.be.a('string'); 
expect('password').to.have.lengthOf(8);
expect(user).to.have.property('phoneNumber').that.is.a('number');
expect(user).to.have.property('firstName').to.equal("john");
expect(user).to.have.property('email').to.equal("john56@gmail.com");
expect(user).to.have.property('role').to.equal("user");
done();
    });
});




















