const Tweet = mongoose.model('twitter', {
    created_at: Date,
    t_id: Number,
    text: String,
    user_id: String
});

const User = mongoose.model('twitter', {
    t_id: Number, //id twitter
    name: String
});

const tweetUser = mongoose.model('twitter', {
    user_id: String,
    tweet_id: String
});