const {CityService} = require('../sevices/index');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }    
}

// DELETE /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            err: {}
        });1
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}
// Patch /city/:id -> req.body
const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully Updated the City",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}
// GET /city/:id
const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const city = await cityService.getAll(req.query);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched all the cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the cities",
            err: error
        });
    }
}
const createMultipleCities = async (req, res) => {
    try {
        const cities = await cityService.createMultipleCities(req.body.name);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Successfully Created the cities.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the cities",
            err: error
        });
    }
}
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    createMultipleCities
}