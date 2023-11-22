const { Given, When, Then } = require('cucumber')

Given('Tengo los siguientes datos de reserva', (table) => {
    data = table.hashes()[0]
})