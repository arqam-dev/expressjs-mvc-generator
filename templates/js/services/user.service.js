'use strict';

// import model
const UserRepository = require('../repositories/user.repository');

// import Console.Log
const ConsoleLog = require('../public/javascripts/console.log');

// import response
const FailureResponse = require('../public/javascripts/responses/response.failure.json');
const SuccessResponse = require('../public/javascripts/responses/response.success.json');

// create class object
const service = {};

service.getAllUsers = async () => {
    ConsoleLog('getAllUsers in services called');
    
    let userObj = await UserRepository.getAllUsers();

    let success_200 = SuccessResponse.success_200;
    success_200.message = 'All Users List!';
    success_200.data.items = userObj;

    return success_200;
}

module.exports = service;