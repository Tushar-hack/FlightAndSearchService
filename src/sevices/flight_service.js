const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor () {
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }

    async createFlight( data ) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight =  await this.FlightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            throw{error};
            console.log("Something went wrong at service layer");
        }
    }

    async getAllFlightData (data) {
        try {
            const flights = await this.FlightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async getFlight (flightId) {
        try {
            const flight = await this.FlightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }
}

module.exports = FlightService;