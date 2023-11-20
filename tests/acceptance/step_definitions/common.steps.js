const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('supertest')
const createApp = require('../../../app')
const e = require('express')

When("Envio un POST request a {string}", async(url) => {
    const app = createApp()

    response = await request(app)
        .post(url)
        .send(data)
})

When("Envio un PUT request a {string}", async(url) => {
    const app = createApp()

    response = await request(app)
        .put(url)
        .send(data)
})

When('Envio un GET request a {string}', async(url) => {
    const app = createApp()

    response = await request(app)
        .get(url)
})

When('Envio un DELETE request a {string}', async(url) => {
    const app = createApp()

    response = await request(app)
        .delete(url)
})

Then('El response status code es {string}', (statusCode) => {
    expect(String(response.statusCode)).to.equal(statusCode)
})

Then('La respuesta debe contener el campo {string}', (property) => {
    expect(response.body).to.have.property(property)
})

Then('El id en la respuesta es {string}', (id) =>{
    expect(response.body.id).to.equal(id)
});

Then('El campo {string} en la respuesta es {string}', (property, value) => {
    expect(response.body[property]).to.equal(value)
})

Then('El campo {string} existe', (string) => {
    expect(response.body).to.have.property(string)
});