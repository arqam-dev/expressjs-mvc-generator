let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

let server = require('../../app');

//Our parent block
describe('/GET users', () => {
    it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/v1/users')
            .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                done();
            });
    });
});