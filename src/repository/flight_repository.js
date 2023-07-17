const { Flight } = require ('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter (data) {
        let filter = {};
        // Below 2 if else can be replaced by destructuring the data object
        // let filter = {...data};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    {
                        price: {
                            [Op.gte]: data.minPrice
                        }
                    },
                    {
                        price: {
                            [Op.lte]: data.maxPrice
                        }
                    }
                ]
            });
        }

        // let priceFilter = [];

        if(data.minPrice){
            Object.assign(filter, {
                price: {
                    [Op.gte]: data.minPrice
                }
            });
            // priceFilter.push({
            //     price: {
            //         [Op.gte]: data.minPrice
            //     }
            // });
        }
        if(data.maxPrice) {
            Object.assign(filter, {
                price: {
                    [Op.lte]: data.maxPrice
                }
            });
            // priceFilter.push({
            //     price: {
            //         [Op.lte]: data.maxPrice
            //     }
            // });
        }
        // Object.assign(filter, {
        //     [Op.and]: priceFilter
        // });
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            throw {error};
            console.log("Something went wrong at repository Layer");
        }
    }

    async getFlight (flightId) {
        try {
            const flightData = await Flight.findByPk(flightId);
            return flightData;
        } catch (error) {
            throw { error};
            console.log("Something went wrong at repository layer.");
        }
    }

    async getAllFlight (filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            throw { error};
            console.log("Something went wrong at repository layer.");
        }
    }
}

module.exports = FlightRepository;