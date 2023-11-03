class Resource {
    constructor({ id, name, description, type, stock, details }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.stock = stock;
        this.details = details;
    }
}

module.exports = Resource;
