const { Op } = require('sequelize');
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
            // The below approach also works but not retrun updated object
            // if we are using pgsql then returning:true can be used, else not
            // const updateCity = await City.update(name,{
            //     where: {
            //         id
            //     }
            // });
            // for getiing updated data in mysql we use the below approach
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

    async getAll (filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name 
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong at Repository Layer.");
            throw {error};
        }
    }

    async createMultipleCity (name) {
        try {
            var newCities = [];
            for (var i=0 ; i < name.length ; i++ ) {
                newCities[i] = await City.bulkCreate([
                    {
                        name: name[i]
                    }
                ]);
            }
            return newCities;
        } catch (error) {
            console.log("Something went wrong at Repository Layer.");
            throw {error};
        }
    }
}

module.exports = cityRepository;