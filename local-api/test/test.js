var assert = require('assert')
const request = require('supertest')
const CreateServer = require('../create-server')

const PORT = 4111
const ServerInstance = CreateServer()

describe('Initial Express Testing', function () {
  let expressListner = null

  before(function () {
    // runs once before the first test in this block
    expressListner = ServerInstance.listen(PORT, () => {
      console.log(`Local TEST API listening at http://localhost:${PORT}`)
    })
  })

  describe('GET /list', function () {
    it('responds with json', function (done) {
      request(ServerInstance)
        .get('/list')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('GET /job/4', function () {
    it('responds with json', function (done) {
      request(ServerInstance)
        .get('/job/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          assert((response.body.job_id === 4))
          assert((response.body.orders.length === 5))
          assert((response.body.active_orders === 2))
          assert((response.body.completed_orders === 3))
          return done()
        }).catch(err => {
          console.log(err)
          return done()
        })
    })
  })

  after(function () {
    // runs once after the last test in this block
    // To stop the express server
    expressListner.close()
  })
})
