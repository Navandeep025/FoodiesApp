const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../server");

var url = supertest("http://localhost:8080/restaurants");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res) {
          if (err) {
				        throw err;
          }
          res.text.should.equal("response from user GET route check",res.text, "response text is not matching with test string!");
          done();
        });
  });
  });
