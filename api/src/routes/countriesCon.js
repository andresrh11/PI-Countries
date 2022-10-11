const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();
require("dotenv").config();

router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  console.log(2);

  const countryId = await Country.findByPk(id.toUpperCase(), {
    include: Activity,
  });

  if (!countryId) return res.status(500).send("Pais no encontrado");
  res.json(countryId);
});

router.get("/countries", async (req, res) => {
  const {
    id,
    name,
    capital,
    continents,
    region,
    area,
    subregion,
    population,
    flags,
  } = req.query;
  try {
    if (name) {
      const paisQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: name + "%",
          },
        },
        include: Activity,
      });
      return paisQuery.length
        ? res.json(paisQuery)
        : res.status(500).json({ message: `${name} no existe` });
    } else {
      const conditions = {};
      const where = {};
      if (id) where.id = id;
      if (name) where.name = name;
      if (capital) where.capital = capital;
      if (continents) where.continents = continents;
      if (region) where.region = region;
      if (area) where.area = area;
      if (subregion) where.subregion = subregion;
      if (population) where.population = population;
      if (flags) where.flags = flags;

      conditions.where = where;

      const paises = await Country.findAll(conditions);
      res.json(paises);
      console.log(1);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
