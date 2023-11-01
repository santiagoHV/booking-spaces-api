const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('supertest')
const createApp = require('../../../app')

let userData
let response

Given('Tengo los siguientes datos de usuario:', (table) => {
    userData = table.hashes()[0]
})

When("Envio un POST request a {string}", async(url) => {
    const app = createApp()

    response = await request(app)
        .post(url)
        .send(userData)
})

When('Envio un GET request a {string}', async(url) => {
    const app = createApp()

    response = await request(app)
        .get(url)
})

Then('El response status code es {string}', (statusCode) => {
    expect(String(response.statusCode)).to.equal(statusCode)
})

Then('La respuesta debe contener el campo {string}', (property) => {
    expect(response.body).to.have.property(property)
})

