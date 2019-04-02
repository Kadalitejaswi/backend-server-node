const dbconn=require('../../app/models/db.connection')
const chai = require('chai')
const expect = chai.expect;
var mongoose=require('mongoose')
// var Trade = require('../app/model/tradewin.model.js');
var Trade = mongoose.model('tradeWin');
describe('trade model', () => {
 
it('should have properties ', (done) => {
var trade = new Trade({
        name:"car",
        image:"images/cars/img1.jpg",
        subcategory:[{
            name:"Hyundai Verna",
            image:"images/cars/verna.jpg",
            sub:[{
                name:"Hyundai Verna E 1.4",
                image:"images/",
                date:"11-11-2017",
                model:"",
                price:"7,00,000",
                location:"hyderabad",
                details:`The Hyundai Verna has been around for 
                a long time now. With 3.18 lakh units sold in 
                India and with over 8.8 million customers worldwide`
                    }
                    ]
                }]
        });

expect('name').to.be.a('string'); 
expect(trade).to.be.an('object');
expect('subcategory').to.include('sub');
expect('subcategory').to.have.lengthOf(11); //tells subcategory length
expect(trade).to.have.property('name').to.equal("car");
expect(trade).to.have.property('image').that.is.a('string');
expect(trade).to.have.property('subcategory');
expect(trade).to.have.property('subcategory').to.have.lengthOf(1);
expect(trade).to.have.property('subcategory').to.be.an('array');
expect(trade).to.have.property('image').to.equal("images/cars/img1.jpg");
done();
    });
});
