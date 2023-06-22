const { cityService } = require('../sevices/index');

const CS = new cityService();

const create = async (req,res) => {
    try {
        const city = await CS.createCity(req.body);
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
        const response = await CS.deleteCity(req.params.id);
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
        const city = await CS.updateCity(req.params.id, req.body);
        return res.status().json({
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
        const city = await CS.getCity(req.params.id);
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
module.exports = {
    create,
    destroy,
    update,
    get
}