const mongoose = require('mongoose');

const Tweet = mongoose.model('tweets', {
    created_at: String,
    id: Number,
    id_str: String,
    text: String,
    user: String
});


//GET:
function list(text){
    console.log(text);
    const query = {};
    if(text) {
        query.$text = {
            $search: text,
        };
    }
    return Tweet.find(query);
}

// http://localhost:3002/tweets?text=
//return Tweet.find({"text": text});

module.exports = {
    list,
};