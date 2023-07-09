const { AirportService } = require('../sevices/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the Airport.",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot create a new Airport.",
            err: error
        });
    }
}

module.exports = {
    create
}