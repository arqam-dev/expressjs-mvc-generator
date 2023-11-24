'use strict';

// import .env
const {
    SHOW_LOGS
} = process.env;

const ConsoleLog = async (log) => {
    if (SHOW_LOGS) console.log(log);
}

const ConsoleError = async (log) => {
    if (SHOW_LOGS) console.error(log);
}

module.exports = ConsoleLog, ConsoleError;