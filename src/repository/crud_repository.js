class CrudRepository {
    constructor (model) {
        this.model = model;
    }

    async create (data) {
        try {
            const newOne = await this.model.create(data);
            return newOne;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }
    async destroy (modelId) {
        try {
            await this.model.destroy({
                where: {id: modelId}
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }
    async update (modelId, data) {
        try {
            const newOne = await this.model.update(data , {
                where: {id:modelId}
            });
            return newOne;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }

    async get (modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
             throw {error};
        }
    }


    async getAll () {
        try {
            const newOne = await this.model.findAll();
            return newOne;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw {error};
        }
    }
}

module.exports = CrudRepository;