const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitter');

var tweetSchema = new mongoose.Schema({
    created_at: String,
    id: Number,
    id_str: String,
    text: String,
    retweeted_status: Object,
}, {strict: false});


//GET:
const Tweet = mongoose.model('tweetsv2', tweetSchema)
function list(text){
    //console.log(text);
    const query = {};
    if(text) {
        query.$text = {
            $search: text,
        };
    }
    return Tweet.find(query);
}

function post(tweet){
    //console.log(tweet);
    return new Tweet(tweet).save()
    .catch((error) => {
        if (error.code === 11000){
            throw new Error('error');
        }
        throw new Error;
    });
}

// http://localhost:3002/tweets?text=
//return Tweet.find({"text": text});

module.exports = {
    list,
    post
};