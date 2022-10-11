const { Activity, Country } = require("../db");
const { Router } = require("express");
const router = Router();
router.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    console.log(8);
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
  }
});
router.post("/activities", async (req, res) => {
  try {
    const { name, dificultad, duracion, temporada, countries } = req.body;

    let newActivity = { name, dificultad, duracion, temporada };
    let activityCreated = await Activity.create(newActivity);
    let addActivity = await activityCreated.addCountry(countries);
    const relacion = Country.findAll({
      where: {
        name: countries,
      },
      include: Activity,
    });
    return res.json(relacion);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
