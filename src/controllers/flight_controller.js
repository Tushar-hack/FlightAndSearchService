const {FlightService} = require('../sevices/index');
const { SuccessErrorCodes } = require('../utils/error_codes')
const flightServices = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightServices.createFlight(flightRequestData);
        return res.status(SuccessErrorCodes.CREATED).json({
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

const getAll = async (req, res) => {
    try {
        const response = await flightServices.getAllFlightData(req.query);
        return res.status(SuccessErrorCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched the Flights",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the Flights",
            err: error
        });
    }
}


const get = async (req, res) => {
    try {
        const response = await flightServices.getFlight(req.params.id);
        return res.status(SuccessErrorCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the Flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the Flights",
            err: error
        });
    }
}
module.exports = {
    create,
    getAll,
    get
}