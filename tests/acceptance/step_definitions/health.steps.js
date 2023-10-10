const { Given, When, Then } = require('cucumber')
const request = require('supertest')
const { expect } = require('chai')
const createApp = require('../../../app')

let userData
let response

When("Envio un GET request a /", async() => {
    const app = createApp()
    response = await request(app)
        .get('/')
})

Then('El status code es 200', () => {
    expect(response.statusCode).to.equal(200)
})