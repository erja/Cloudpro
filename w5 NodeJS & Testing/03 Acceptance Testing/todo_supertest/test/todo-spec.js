/* Exploring ECMA6 promise chains and arrow functions */
"use strict"

const should = require('should');

//todo-spec.js
const request = require('supertest');
var server = require('../index.js'); //reference to you app.js file

describe('GET /lists', function () {
    it('get empty list', function (done) {
        request('http://localhost:8080')
            .get('/lists')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404,'error')
           // .expect('no lists found')
            done();
        });
});

describe('POST /lists', function () {
	let data = {"name": "shopping", "list": ["Cheese", "Bread", "Butter"]}
    it('add a new list', function (done) {
        request('http://localhost:8080')
		.post('/lists')
		.set('Authorization', 'Basic dGVzdHVzZXI6cDQ1NXcwcmQ=')
		.send(data)
	  .expect('Content-Type', /json/)
    .expect(201)
		.end(function(err, res){
		  if (err) return done(err);
			res.body.should.have.property('message');
			res.body.should.have.property('data');
			done();
		});
	});
});

/*
 Since Frisby is built on the Jasmine library we can use any of the standard matchers by enclosing them in an anonymous function passed to the 'afterJSON()' method.
frisby.create('check number of lists')
  .get('http://localhost:8081/lists')
  .expectStatus(200)
  .afterJSON( json => {
    // you can retrieve args using json.args.x
    // these are standard Jasmine matchers as covered in the first worksheet.
    expect(json.status).toMatch('success')
    expect(json.message).toContain('1')
    expect(json.data.length).toEqual(1)
    // We can even use the data returned to make additional API calls. Remember the JS scoping rules?
    frisby.create('Second test, run after first is completed')
      .get(json.data[0].link)
      .expectStatus(200)
      .toss()
  })
  .toss()
*/