const jwt = require('jsonwebtoken');

require("dotenv").config();

// import Console.Log
const ConsoleLog = require('../../public/javascripts/console.log');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

module.exports = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, accessTokenSecret);

        ConsoleLog('decodedToken in auth');
        ConsoleLog(decodedToken);

        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};