class ResourceController {
    constructor({ resourceService }) {
        this.resourceService = resourceService;
    }

    async getResources(req, res) {
        try {
            const resources = await this.resourceService.getAll();
            return res.status(200).json(resources);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getResource(req, res) {
        try {
            const { id } = req.params;
            const resource = await this.resourceService.get(id);
            return res.status(200).json(resource);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async createResource(req, res) {
        try {
            const resource = req.body;
            const newResource = await this.resourceService.create(resource);
            return res.status(201).json(newResource);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async updateResource(req, res) {
        try {
            const { id } = req.params;
            const resource = req.body;
            const updatedResource = await this.resourceService.update(id, resource);
            return res.status(200).json(updatedResource);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async deleteResource(req, res) {
        try {
            const { id } = req.params;
            await this.resourceService.delete(id);
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getAvaliability(req, res) {
        try {
            const { id } = req.params;
            const avaliability = await this.resourceService.getAvaliability(id);
            return res.status(200).json(avaliability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async createAvaliability(req, res) {
        try {
            const { id } = req.params;
            const avaliability = req.body;
            const newAvaliability = await this.resourceService.createAvaliability(id, avaliability);
            return res.status(201).json(newAvaliability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async updateAvaliability(req, res) {
        try {
            const { id } = req.params;
            const avaliability = req.body;
            const updatedAvaliability = await this.resourceService.updateAvaliability(id, avaliability);
            return res.status(200).json(updatedAvaliability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async deleteAvaliability(req, res) {
        try {
            const { id } = req.params;
            await this.resourceService.deleteAvaliability(id);
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = ResourceController;