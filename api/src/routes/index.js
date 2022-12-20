const express = require('express');
const { Router } = require('express');
const dogRoute = require ('./dog/dog.js')
const temperamentRoute = require ('./temperament/temperament.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(express.json());

router.use('/dogs', dogRoute)
router.use('/temperaments', temperamentRoute)


module.exports = router;
