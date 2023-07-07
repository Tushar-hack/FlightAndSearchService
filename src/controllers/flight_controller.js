const {FlightService} = require('../sevices/index');

const flightServices = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightServices.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created the flight.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a Flight",
            err: error
        });
    }
}
module.exports = {
    create
}