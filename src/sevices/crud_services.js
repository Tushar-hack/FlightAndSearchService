class CrudService {
    constructor (Repository) {
        this.repository = Repository;
    }

    async create (data) {
        try {
            const repo = await this.repository.create(data);
            return repo;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async update (id, data) {
        try {
            const repo = await this.repository.update(id, data);
            return repo;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async destroy(id) {
        try {
            const repo = await this.repository.destroy(id);
            return repo;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async get (id) {
        try {
            const repo = await this.repository.get(id);
            return repo;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async getAll () {
        try {
            const repo = await this.repository.getAll();
            return repo;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
}

module.exports = CrudService;