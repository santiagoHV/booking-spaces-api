class Availability {
    constructor({ id, startTime, endTime, day, resourceId }) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
        this.resourceId = resourceId;
    }


}

module.exports = Availability;
