const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

module.exports.chai = chai
module.exports.request = chai.request
