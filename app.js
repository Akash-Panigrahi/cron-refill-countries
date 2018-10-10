const cron = require('node-cron');

const { allCountries } = require('./index');

const task = cron.schedule('* 7 * * *', () => {

	console.log('Running a task every morning at 07 am!');

	allCountries()
		.catch(err => console.error(err));
});

task.start();