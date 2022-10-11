const axios = require("axios");
require("dotenv").config();
const { Country } = require("../db");
async function getAll() {
  const countries = await axios.get("https://restcountries.com/v3.1/all");
  let resultadoApi = await countries.data.map((e) => {
    return {
      id: e.cca3,
      flags: e.flags.png,
      name: e.name.common,
      continents: e.region,
      capital: e.capital ? e.capital[0] : e.name.common,
      subregion: e.subregion ? e.subregion : e.region,
      area: e.area,
      population: e.population,
    };
  });
  resultadoApi.map((e) => {
    Country.findOrCreate({
      where: {
        id: e.id,
        flags: e.flags,
        name: e.name,
        continents: e.continents,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      },
    });
  });
}
module.exports = {
  getAll,
};
