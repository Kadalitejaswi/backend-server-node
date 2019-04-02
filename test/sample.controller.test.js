//importing assert module(nodejs built in module)
var assert = require('assert');
var sample=require('../app/controllers/sample.controller')

var result =sample. add(1,2);

assert(result ===3, 'one plus two is three');

//Checks if a value is true
assert.ok(result ==3, 'one plus two is three');
assert.equal(result, 3, 'one plus two is three');
assert.deepEqual(result, 3, 'these two objects are the same');
assert.strictEqual(3, 3, ' same values'); // this will fail
assert.notStrictEqual(result, 'result', 'not the same (strictly)');
assert(expected != 4, 'one plus two is three');
assert.notEqual(result, 5, 'one plus two is three (NOT Four!)');

// assert.fail(21, 42, 'Test Failed', '###')//throws an assertion error



// hello world function
var expected = sample.sayHello('World')
    assert.equal(expected, "Hello World");

//object
assert.deepEqual(sample.obj1.a, sample.obj2.a);
assert.deepStrictEqual(sample.obj1.a, sample.obj1.a);



// welcome function
sample.welcome('World', function(err, value){
 assert.ifError(err);//while testing the first argument, error in callbacks.
 assert.equal(value, "Hello World");
})

