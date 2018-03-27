const mongoose = require('mongoose');

const User = mongoose.model('users', {
    id_str: String,
    name: String,
});

//GET:
function getUsers(){
    return User.find({});
}

function getUser(user){
    return User.find({"name": user});
}

module.exports = {
    getUsers,
    getUser
};