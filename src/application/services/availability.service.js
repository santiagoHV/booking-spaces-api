class AvailabilityService {
    constructor(
        availabilityRepository, 
        bookingRepository, 
        resourceRepository,
        ) {
        this.availabilityRepository = availabilityRepository
        this.bookingRepository = bookingRepository
        this.resourceRepository = resourceRepository
    }

    isAValidBlock = async (startTime, endTime, day, id) => {
        if(startTime >= endTime) {
            throw new Error('Start time must be before end time')
        }

        const availabilityBlocks = await this.availabilityRepository.findByResourceIdAndDay(id, day)

        if(availabilityBlocks.length === 0) {
            throw new Error('No availability blocks found for this day')
        }

        return availabilityBlocks.some(availabilityBlock => {
            return availabilityBlock.startTime === startTime && availabilityBlock.endTime === endTime
        })
    }

    isBlockAvailableInDay = (availabilityBlock, bookingsInDay) => {
        return bookingsInDay.every(booking => {
            const bookingStart = booking.startTime
            const bookingEnd = booking.endTime

            return bookingStart !== availabilityBlock.startTime && bookingEnd !== availabilityBlock.endTime
        })
    }
}

module.exports = AvailabilityService;