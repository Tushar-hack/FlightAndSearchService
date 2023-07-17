const express = require('express');
const {CityController, FlightController, AirportController} = require('../../controllers/index');
const { FlightMiddleware } = require('../../middlewares/index');

const router = express.Router();


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.post('/cities', CityController.createMultipleCities);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/flights',
        FlightMiddleware.validateCreateFlight,
        FlightController.create
    );
router.get('/flights', FlightController.getAll);
router.get('/flight/:id', FlightController.get);

router.post('/airports', AirportController.create);
module.exports = router;