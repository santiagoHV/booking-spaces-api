const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('Tengo los siguientes datos del recurso', (table) => {
    data = table.hashes()[0]
});

Given('Tengo los siguientes datos de disponibilidad', (table) => {
    data = table.hashes()
});