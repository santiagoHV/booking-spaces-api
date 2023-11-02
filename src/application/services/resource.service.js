class ResourceService {
    constructor(resourceRepository, avaliabilityRepository) {
        this.resourceRepository = resourceRepository;
        this.avaliabilityRepository = avaliabilityRepository;
    }

    async getAll() {
        return await this.resourceRepository.getAll();
    }

    async get(id) {
        return await this.resourceRepository.get(id);
    }

    async create(resource) {
        return await this.resourceRepository.create(resource);
    }

    async update(id, resource) {
        return await this.resourceRepository.update(id, resource);
    }

    async delete(id) {
        return await this.resourceRepository.delete(id);
    }

    async getAvaliability(id) {
        return await this.avaliabilityRepository.getAllByResourceId(id);
    }

    async createAvaliability(avaliability) {
        return await this.avaliabilityRepository.create(avaliability);
    }

    async updateAvaliability(id, avaliability) {
        return await this.avaliabilityRepository.update(id, avaliability);
    }

    async deleteAvaliability(id) {
        return await this.avaliabilityRepository.delete(id);
    }
}