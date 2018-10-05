const express = require('express');
const cron = require('node-cron');

const app = express();

const { allCountries, catchErrors } = require('./index');


cron.schedule('30 * * * * *', function () {
	console.log('Running a task every minute');
	catchErrors(allCountries)();
});


app.listen(3128);