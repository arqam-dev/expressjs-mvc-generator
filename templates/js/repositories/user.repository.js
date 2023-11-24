'use strict';

// import model
const UserModel = require('../models/user.model');

// import Console.Log
const ConsoleLog = require('../public/javascripts/console.log');

// create class object
const repository = {};

repository.getAllUsers = async () => {
    ConsoleLog('getAllUsers in repository called...!');
    // All db queries will be listed here
    let userObj = await UserModel.findAll();
    return userObj;
}

module.exports = repository;