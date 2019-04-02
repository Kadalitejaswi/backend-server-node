let mongoose = require("mongoose");
let Trade = require('../../app/models/products.model');
let app=require('../../app/routes/products.route.js')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let expect = chai.expect();
let should = chai.should();

chai.use(chaiHttp);

describe('tradewin products', () => {
  var product;
  it('it should GET all the products', (done) => {
  chai.request('http://localhost:4080/api')
      .get('/products')
      .end((err, res) => {
      // console.log("ress",res.body);
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.type.should.equal('application/json');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('name');
      res.body[0].should.have.property('image');
      res.body[0].should.have.property('subcategory')
      done()
           
        });
      });
   

  // get invalid path
  // it('should return Not Found', function() {
  //   chai.request('http://localhost:4080/api')
  //     .get('/productss')
  //     .expect(500)
  //     .catch(function(res) {
  //      // res.status.should.equal(500);
  //     expect(err).to.have.status(500);
  //     });
  // });
//POST request
  it('it should  POST a product (products/new)', (done) => {
      product = {
          name:"car",
          image:"images/cars/img1.jpg",
          subcategory:[{
               name:"Hyundai Verna",
               image:"images/cars/verna.jpg",
               sub:[{
                  name:"Hyundai Verna E 1.4",
                  image:"images/",
                  date:"11-11-2017",
                  model:"A777-200LR",
                  price:"7,00,000",
                  location:"hyderabad",
                  details:"The Hyundai Verna has been around......"
                    }
                    ]
                  }]
                };
  chai.request('http://localhost:4080/api')
      .post('/products/new')
      .send(product)
      .end((err, res) => {
        product._id=res.body._id
        // console.log("product-",res)
        // console.log("resp",res);
        // console.log("error----------",err)
       res.should.have.status(201);
       res.body.should.be.a('object');
       res.type.should.equal('application/json');
       res.body.should.have.property('name');
       res.body.should.have.property('image');
       res.body.should.have.property('subcategory');
       res.body.subcategory[0].should.have.property('name');
       res.body.subcategory[0].sub[0].should.have.property('date').eql('11-11-2017');
       res.body.subcategory[0].sub[0].should.have.property('model').eql('A777-200LR');
       res.body.subcategory[0].sub[0].should.have.property('price').eql('7,00,000');
       res.body.subcategory[0].sub[0].should.have.property('location').eql('hyderabad');
          done();
            });
          });
  //GET ONE product (/products/productId)
  it('it should GET one product(product/:productid)', (done) => {
  chai.request('http://localhost:4080/api')
      .get('/products/'+product._id)
      .send({name:"car",image:"dance/images/fly.png"})
      .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.type.should.equal('application/json');
      res.body.should.have.property('name');
      res.body.should.have.property('image');
      res.body.should.have.property('subcategory');
      res.body.should.have.property('name').eql('car');
      res.body.should.have.property('image').eql('images/cars/img1.jpg');
        done()
        });
     });
          

//PUT updating product (/products/:productId)

 it('it should UPDATE one product (product/:productid)', (done) => {
 chai.request('http://localhost:4080/api')
     .put('/products/'+product._id)
     .send({name:"bikes",image:"images/bikes/bike.jpg",'subcategory.0.name':"scooty"})
     .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('name')
      res.body.should.have.property('image');
      res.body.should.have.property('subcategory');
      res.body.should.have.property('name').eql('bikes');
        done()
      });
          
     });


//DELETE deleting products  (/products/:productId)
      
                       
  it('it should delete a product/:product id', (done) => {
  chai.request('http://localhost:4080/api')
      .put('/products/'+product._id)
      .send({name:"bikes",image:"images/bikes/bike.jpg"})
      .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('name')
      res.body.should.have.property('image')
      res.body.should.have.property('subcategory')
      res.body.should.have.property('name').eql('bikes');
        done()
          });
        })
    });
      

     

 
//Using Expect Method

// describe('API endpoints /products', ()=>{
// // this.timeout(5000); // How long to wait for a response (ms)
// var product;

// // GET All products(testing all products details)
// it('/GET should return all products', () =>{
//   chai.request('http://localhost:4080/api')
//       .get('/products')
//       .end(function(err,res) {
//        expect(res.body).to.have.status(200);
//        expect(res).to.be.json;
//        expect(res.body).to.be.an('object');
//        expect(res.name).to.be.a('string');
//        expect(res.body.subcategory).to.be.an('array');
//        expect(res).to.have.property('name')
//        expect(res).to.have.property('image')
//        expect(res).to.have.property('subcategory')
//        expect(response.name).to.equal('car')
//          })
//      });
//  //POST(Test cases for adding new product)
//  it('it should POST product (products/:productId)', () =>{
//     product ={
//             name:"hero",
//             image:"hero/images/aerp.png",
//             subcategory:[{
//                name:"hero",
//                image:"aeroplane/images/aero.png",
//                sub:[{
//                   name:"hero",
//                   image:"aeroplane/images/aero.png",
//                   date:"12-10-12018",
//                   model:"A777-200LR ",
//                   price:"25,000",
//                   location:"hyd",
//                   details:"khammam"
//                       }
//                               ]
//                     }]
//                    };
//   chai.request('http://localhost:4080/api')
//       .post('/products/new')
//       .send(product)
//       .end(function(err,res) {
//         // console.log("body===",res.body)
//        product._id=res.body._id
//         // console.log("product response-----",product._id)
        
//        expect(res.body).to.have.status(200);
//        expect(err).to.not.exit;          
//        expect(res).to.be.json;
//        expect(res.body).to.be.an('object');
//        expect(response.name).to.be.a('string');
//        expect(res.body.subcategory).to.be.an('array');
//        expect(res).to.have.property('name')
//        expect(res).to.have.property('image')
//        expect(res).to.have.property('subcategory')
//        expect(response.name).to.equal('hero')
        
//         })
//       })

//     })
  


 



  























  