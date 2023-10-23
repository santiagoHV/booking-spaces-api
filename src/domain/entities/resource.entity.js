class Resource {
    constructor({ id, name, schedule, type, maxOcupation, stock, description, details }){
        this.id = id;
        this.name = name;
        this.schedule = schedule;
        this.type = type;
        this.maxOcupation = maxOcupation;
        this.stock = stock;
        this.description = description;
        this.details = details;
    }
}