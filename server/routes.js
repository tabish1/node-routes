var router = require('express').Router()
const app = require('./app')

router.get('/today', (req, res) => {
  console.log("today route")
  app.render(req, res, "/today");
});

router.get('/', (req, res) => {
  console.log("home route")
  res.basheer = 'jatta'
  // res.clearCookie("");
  res.cookie("token", "eysdf");
  res.clearCookie("token");
  app.render(req, res, "index");
});

module.exports = router;