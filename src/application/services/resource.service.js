class ResourceService {
    constructor(resourceRepository,
        availabilityRepository, 
        bookingRepository = null,
        availabilityService = null
        ) {
        this.resourceRepository = resourceRepository;
        this.availabilityRepository = availabilityRepository;
        this.bookingRepository = bookingRepository;
        this.availabilityService = availabilityService;
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

    getAvailabilityByDate = async (id, date) => {
        const resource = await this.resourceRepository.get(id);
        const day = date.getDay();
        const availabilityBlocks = await this.availabilityRepository.findByResourceIdAndDay(id, day);
        
        const bookingsInDay = await this.bookingRepository.findByResourceIdAndDate(id, date);
    
        const dayAvailabilities = availabilityBlocks.map(availability => {
            const isAvailable = this.availabilityService.isBlockAvailableInDay(availability, bookingsInDay)
            return {
                ...availability,
                isAvailable
            }
        })
    
        

        return {
            ...resource,
            dayAvailabilities: dayAvailabilities,
        }
    }

    
}

module.exports = ResourceService;