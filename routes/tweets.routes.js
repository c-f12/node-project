var express = require('express');
var router = express.Router();
const cache = require('../cache');

const tweetsCtrl = require('../controllers/tweets.controller');

/* GET */

/* function getGlobal(route, url) {
  if (url === '/') {
    console.log('la url es ', route)
    console.log('la url es ', url)
    return route;
  }
  return `${route}${url}`;
} */


router.get('/', function(req, res, next) {
  const text = req.query.text;
  //console.log(text);
  tweetsCtrl.get(text)

  .then((resultado) => {
   /*  const url = getGlobal('/tweets', req.url);
    cache[url] = resultado;
    console.log(cache);

    if (cache[req.url]){
      console.log('cache route', cache);
      return res.json(cache[req.url]);
    }  */
    
    return res.json(resultado);
})
  .catch(error => next(error))
})

module.exports = router;

/* app.get('*', (req, res, next) => {
  if (cache[req.url]) {
    console.log('return cache');
    return res.json(cache[req.url]);
  }
  next();
}); */