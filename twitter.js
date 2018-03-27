const Twitter = require('twitter');

const client = new Twitter({

consumer_key: "--",

consumer_secret: "--",

access_token_key: "---",

access_token_secret: "--"

});

client.stream('statuses/filter', { track: 'hola', language: 'es' }, function (stream) {

stream.on('data', function (tweet) {

console.log(tweet.text);

});

stream.on('error', function (error) {

console.log(error);

});

});