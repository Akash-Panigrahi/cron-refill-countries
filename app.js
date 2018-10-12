const cron = require('node-cron')
  , logger = require('./logger')
  ;

const { allCountries } = require('./index');

const task = cron.schedule('* 7 * * *', () => {

	logger.info('Running a task every morning at 07 am!');

	allCountries()
		.catch(err => logger.error(err));
});

task.start();
