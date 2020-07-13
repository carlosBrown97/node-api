process.env.NODE_ENV = 'test';
process.env.CONFIG = 'config.test.json';

const it = require('mocha').it
const describe = require('mocha').describe
const expect = require('chai').expect
const app = '../src/index'
const utils = './utils'
const request = require('supertest')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const url = 'http://localhost:3000'


describe('USERS', () => {
  describe('GET /users/', () => {
    it('should return 201 as default data status', (done) => {
      try {
        chai.request(url).get('/users')
          .then(x => {
            expect(x).to.have.status(201)
            done()
          })
      } catch(e) {
        done(e)
      }
    })

    it('should return json as default data format')
  })

})

