const mongoose = require('mongoose');
const db = require('./data/users');
const P = require('bluebird');

mongoose.connect('mongodb://localhost/twitter');

const User = mongoose.model('twitter', {
    id_str: String,
    name: String,
});

P.each(db, (element) => {
    return new User(element).save();
}).then(console.log);