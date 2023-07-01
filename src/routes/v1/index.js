const express = require('express');
const cityController = require('../../controllers/city_controller');
const router = express.Router();


router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.post('/cities', cityController.createMultipleCities);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

module.exports = router;