var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../../server');

var expect = chai.expect;

describe('test for beer temp outside', function(){
  it('should get the temp', function(done){
    chai.request('http://localhost:3000')
      .get('/')
      .send({msg: 'You got the temp'})
      .end(function(err,res){
        expect(err).to.eql(null);
        expect(res.body).to.have.property('_id');
        done();
      });
    });
})
