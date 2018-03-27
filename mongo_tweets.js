const mongoose = require('mongoose');
const db = require('./data/tweets');
const P = require('bluebird');

mongoose.connect('mongodb://localhost/twitter');

const Tweet = mongoose.model('twitter', {
    created_at: String,
    id: Number,
    id_str: String,
    text: String,
    user: String
});

P.each(db, (element) => {
    return new Tweet(element).save();
}).then(console.log);