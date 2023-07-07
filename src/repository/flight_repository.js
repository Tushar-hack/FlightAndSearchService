const { Flight } = require ('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            throw {error};
            console.log("Something went wrong at repository Layer");
        }
    }
}

module.exports = FlightRepository;