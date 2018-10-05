const axios = require('axios');

exports.allCountries = async function (req, res) {
	const countries = await axios.get('https://restcountries.eu/rest/v2/all');
	console.log(countries);
	return countries;
};

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};