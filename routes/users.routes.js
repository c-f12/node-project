var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users.controller');

/* GET */
router.get('/', function(req, res, next) {
  usersCtrl.getUsers()
  .then((resultado) => {
    res.json(resultado)
})
  .catch(error => next(error))
})

router.route('/:name')
.get((req,res,next) => {
  const name = req.params.name;
  console.log(name);
  usersCtrl.getUser(name)
  .then((resultado) => {
    res.json(resultado)
})
  .catch(next);
})

module.exports = router;
