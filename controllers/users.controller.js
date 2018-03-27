const userModel = require('../models/users.model');

function getUsers(){
    return userModel.getUsers();
}

function getUser(name){
    return userModel.getUser(name);
}

module.exports = {
    getUsers,
    getUser
};