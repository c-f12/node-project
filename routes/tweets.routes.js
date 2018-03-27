var express = require('express');
var router = express.Router();

const tweetsCtrl = require('../controllers/tweets.controller');

/* GET */

router.get('/', function(req, res, next) {
  const text = req.query.text;
  console.log(text);
  tweetsCtrl.get(text)
  .then((resultado) => {
    res.json(resultado)
})
  .catch(error => next(error))
})


module.exports = router;
