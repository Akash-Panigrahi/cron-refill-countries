const axios = require('axios')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const countrySchema = new Schema({}, { strict: false });
const Country = mongoose.model('Country', countrySchema);

exports.allCountries = async () => {

  // 1. empty out the countries collection
  const deleteManyRes = Country.deleteMany();

  const countries =
    await axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => res.data);

  await deleteManyRes;

  // 2. insert new documents in 'countries' collection
  await Country.insertMany(countries);
};
