const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // make sure server exports 'app'
const should = chai.should();

chai.use(chaiHttp);

describe('Books API', () => {
  let token = '';

  // Before all tests, login and get token
  before((done) => {
    chai.request(server)
      .post('/auth/login')
      .send({ username: 'john_doe', password: 'password123' }) // use your user credentials
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  it('should create a new book', (done) => {
    chai.request(server)
      .post('/api/books')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2024-01-01',
        genre: 'Test Genre'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        done();
      });
  });

  it('should GET all books', (done) => {
    chai.request(server)
      .get('/api/books')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
