class ResourceController {
    constructor( resourceService ) {
        this.resourceService = resourceService;
    }

    getResources = async (req, res) => {
        try {
            const resources = await this.resourceService.getAll();
            return res.status(200).json(resources);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getResource = async (req, res) => {
        try {
            const { id } = req.params;
            const resource = await this.resourceService.get(id);

            if(resource === null || resource === undefined){
                return res.status(404).json({message: 'Resource not found'});
            }

            return res.status(200).json(resource);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    createResource = async (req, res) => {
        try {
            const {name, description, type, stock, details} = req.body;
            const newResource = await this.resourceService.create({
                name,
                description,
                type,
                stock,
                details
            })
            return res.status(201).json(newResource);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    updateResource = async (req, res) => {
        try {
            const { id } = req.params;
            const resource = req.body;
            const updatedResource = await this.resourceService.update(id, resource);
            return res.status(200).json(updatedResource);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    deleteResource = async (req, res) => {
        try {
            const { id } = req.params;
            await this.resourceService.delete(id);
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getAvailability = async (req, res) =>{
        try {
            const { id } = req.params;
            const availability = await this.resourceService.getAvailability(id);
            return res.status(200).json(availability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    createAvailability = async (req, res) => {
        try {
            const { id } = req.params;
            const availability = req.body;
            const newAvailability = await this.resourceService.createAvailability(id, availability);
            return res.status(201).json(newAvailability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    createAvailabilityBulk = async (req, res) => {
        try {
            const { id } = req.params;
            const availabilities = req.body;
            const resourceWIthAvailabilities = await this.resourceService.createAvailabilityBulk(id, availabilities);
            
            return res.status(201).json(resourceWIthAvailabilities);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    updateAvailability = async (req, res) => {
        try {
            const { id } = req.params;
            const availability = req.body;
            const updatedAvailability = await this.resourceService.updateAvailability(id, availability);
            return res.status(200).json(updatedAvailability);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    deleteAvailability = async (req, res) => {
        try {
            const { id } = req.params;
            await this.resourceService.deleteAvailability(id);
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = ResourceController;