class Resource {
    constructor({ id, name, description, type, stock, details, avaliabilitySpaces }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.stock = stock;
        this.details = details;
        this.avaliabilitySpaces = avaliabilitySpaces;
    }
}

module.exports = Resource;