class Booking {
    constructor({ id, startTime, endTime, date, observations, status, userId, resourceId }) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = date;
        this.observations = observations;
        this.status = status;
        this.userId = userId;
        this.resourceId = resourceId;
    }
}

module.exports = Booking;