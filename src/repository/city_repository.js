const { City } = require('../models/index');

class cityRepository {
    async createCity({name}){
        try {
            const newCity = await City.create({name});
            return newCity; 
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }
    async deleteCity(id) {
        try {
            await City.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }

    async updateCity(id , name) {
        try {
            // const updateCity = await City.update(name,{
            //     where: {
            //         id
            //     }
            // });
            const updateCity = await City.findByPk(id);
            updateCity.name = name.name;
            await updateCity.save();
            return updateCity;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }

    async getCity (id) {
        try {
            const city = await City.findByPk(id);
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer.");
            throw {error};
        }
    }
}

module.exports = cityRepository;