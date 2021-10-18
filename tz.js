const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');



let targetTimezone = yargs.argv;

if (process.argv.length != 3){
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else {
    targetTimezone = yargs.argv._[0];
}

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
