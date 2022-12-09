//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/index');
let constants = require('./constants.test');

const should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /GET route
  */
describe('/POST', () => {
    it('it should GET', (done) => {
      let path = '/transactions';
      let body = constants.body;
      chai.request(server)
          .post(path)
          .send(body)
          .end((err, res) => {
            let ok = 200;
            let transactionHashLength = 66; // Eg: 0xf0b9055f2d1f111ebc6190b6e35c9332f134125d1a1f67a9eb75c44c4465c47e

            res.should.have.status(ok);
            res.body.transactionHash.length.should.be.eql(transactionHashLength);
            
            done();
          });
    });
});