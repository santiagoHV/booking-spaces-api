const Avaliability = require('../../../domain/entities/avaliability.entity');

class AvaliabilityRepositoryMock {
    constructor() {
        this.avaliabilities = [
            new Avaliability({
                id: 1,
                startTime: '10:00',
                endTime: '12:00',
                day: '2021-07-15',
                resourceId: 1,
            }),
        ]
        this.nextId = 2
    }

    async create(avaliability) {
        const newAvaliability = {...avaliability, id: this.nextId++ }
        this.avaliabilities.push(newAvaliability)
        return newAvaliability
    }

    async getAllByResourceId(resourceId) {
        const intResourceId = parseInt(resourceId)
        return this.avaliabilities.filter(avaliability => avaliability.resourceId === intResourceId)
    }

    async findById(id) {
        const intId = parseInt(id)
        return this.avaliabilities.find(avaliability => avaliability.id === intId)
    }

    async update(id, avaliability) {
        const intId = parseInt(id)
        const index = this.avaliabilities.findIndex(avaliability => avaliability.id === intId)
        this.avaliabilities[index] = {...avaliability, id: intId }
        return this.avaliabilities[index]
    }

    async delete(id) {
        const intId = parseInt(id)
        const index = this.avaliabilities.findIndex(avaliability => avaliability.id === intId)
        this.avaliabilities.splice(index, 1)
        return true
    }


}