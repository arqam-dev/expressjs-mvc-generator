"use strict";

// const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

// import model
const UserModel = require("../../../models/user.model");

// import service
const UserService = require("../../../services/user.service");

// import .env
const { ACCESS_TOKEN_SECRET, BUCKET_USER_BASE_URL } = process.env;

const multer = require("multer");
const _ = require("lodash");

// import response
const FailureResponse = require("../../../public/javascripts/responses/response.failure.json");
const SuccessResponse = require("../../../public/javascripts/responses/response.success.json");

// import Console.Log
const ConsoleLog = require("../../../public/javascripts/console.log");

// import node mailer
var nodemailer = require("nodemailer");

// create class object
const controller = {};

// Functions

controller.getAllUsers = async (req, res) => {
  ConsoleLog("getAllUsers password called");

  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all users!";
  success_200.data.items = [
    {
      "name": "Jack",
      "email": "jack@gmail.com"
    }
  ];
  res.send(success_200);
};

module.exports = controller;
