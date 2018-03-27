const tweetModel = require('../models/tweets.model');

function get(query){
    if(query){
        console.log(query); 
        return tweetModel.list(query);
    } else{
        return tweetModel.list();
    }  
}

module.exports = {
    get
};