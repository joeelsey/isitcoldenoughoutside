var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;

describe('test for beer temp outside', function(){
  it('should get the temp', function(done){
    chai.request('https://coldenoughforbeer.herokuapp.com/')
      .get('zip/98188')
      .end(function(err,res){
        expect(err).to.eql(null);
        expect(res.body.msg).to.not.equal(undefined);
        done();
      });
    });
})
