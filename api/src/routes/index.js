const { Router } = require('express');
const countryRoute = require('./countriesCon')
const activityRoute = require('./activitiesCon')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', countryRoute);
router.use('/', activityRoute);

module.exports = router;
