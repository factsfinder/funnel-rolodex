const express = require('express')

// This is the API-Service that provides the job/order data
// Endpoints are as follows
// GET /list
// GET /job/:jobId
// GET /orders/:jobId
const API_SERVICE = 'https://takehome-remote-source-api.herokuapp.com'

const createServer = function () {
  const app = express()

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get('/list', (req, res) => {
    res.send('Currently Not Implemented')
  })

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get('/job/:jobId', async (req, res) => {
    res.send('Currently Not Implemented')
  })

  return app
}

module.exports = createServer
