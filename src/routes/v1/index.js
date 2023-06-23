const express = require('express');
const cityRepository = require('../../controllers/city_controller');
const router = express.Router();


router.post('/city', cityRepository.create);

module.exports = router;