const express = require("express");
const axios = require("axios");
// This is the API-Service that provides the job/order data
// Endpoints are as follows
// GET /list
// GET /job/:jobId
// GET /orders/:jobId
const API_SERVICE = "https://takehome-remote-source-api.herokuapp.com";

const createServer = function () {
  const app = express();
  app.use(express.static(__dirname + '/public'));

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */

  app.get("/list", async (req, res, next) => {
    let jobsList = [];
    try {
      const response = await axios.get(`${API_SERVICE}/list`);
      if (response && response.status === 200) {
        jobsList = response.data;
      }
    } catch (error) {
      next(error);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: jobsList });
  });

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get("/job/:jobId", async (req, res, next) => {
    let job = [];
    try {
      const response = await axios.get(
        `${API_SERVICE}/job/${req.params.jobId}`
      );
      if (response && response.status === 200) {
        job = response.data;
      }
    } catch (error) {
      next(error);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: job });
  });

  app.get("/orders/:jobId", async (req, res, next) => {
    let orders = [];
    try {
      const response = await axios.get(
        `${API_SERVICE}/orders/${req.params.jobId}`
      );
      if (response && response.status === 200) {
        orders = response.data;
      }
    } catch (error) {
      next(error);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: orders });
  });

  return app;
};

module.exports = createServer;
