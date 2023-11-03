class ResourceService {
    constructor(resourceRepository, availabilityRepository) {
        this.resourceRepository = resourceRepository;
        this.availabilityRepository = availabilityRepository;
    }

    getAll = async () => {
        return await this.resourceRepository.getAll();
    }

    get = async (id) => {
        return await this.resourceRepository.get(id);
    }

    create = async (resource) => {
        return await this.resourceRepository.create(resource);
    }

    update = async (id, resource) => {
        return await this.resourceRepository.update(id, resource);
    }

    delete = async (id) => {
        return await this.resourceRepository.delete(id);
    }

    getAvailability = async (id) => {
        const resource = await this.get(id);
        const availabilities = await this.availabilityRepository.getAllByResourceId(id);

        return {
            ...resource,
            availabilities
        }
    }

    createAvailability = async (id, availability) => {
        const newAvailability = await this.availabilityRepository.create({...availability, resourceId: id})
        return newAvailability
    }

    createAvailabilityBulk = async (id, availabilities) => {
        const resource = await this.resourceRepository.get(`${id}`);

        const newAvailabilities = Promise.all(availabilities.map(async availability => {
            const newAvailability = await this.availabilityRepository.create({...availability, resourceId: id})
            return newAvailability
        }));

        return {
            ...resource,
            availabilities: await newAvailabilities,
        }
    }

    updateAvailability = async (id, availability) => {
        return await this.availabilityRepository.update(id, availability);
    }

    deleteAvailability = async (id) => {
        return await this.availabilityRepository.delete(id);
    }
}

module.exports = ResourceService;