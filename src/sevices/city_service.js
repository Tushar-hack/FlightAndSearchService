const { CityRepository } = require('../repository/index');

class cityService {
    constructor () {
        this.cityRepository = new CityRepository();
    }

    async createCity (data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
    async deleteCity (cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
    async updateCity (cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
    async getCity (cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
    async getAll (filter) {
        try {
            const cities = await this.cityRepository.getAll(filter);
            return cities;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async createMultipleCities ( name ) {
        try {
            const cities = await this.cityRepository.createMultipleCity(name);
            return cities;
        } catch (error) {
            console.log("Something went wrong at Service Layer.");
            throw {error};
        }
    }
}

module.exports = cityService;