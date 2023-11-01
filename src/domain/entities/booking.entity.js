class Booking {
    constructor({ id, startTime, endTime, observations, status, userId }) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.observations = observations;
        this.status = status;
        this.userId = userId;
    }
}

module.exports = Booking;