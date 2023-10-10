const { Given, When, Then } = require('cucumber')
const request = require('supertest')
const app = require('../../../app')

let userData
let response

Given('Tengo los siguientes datos de usuario:', (table) => {
    userData = table.hashes()[0]
})

When("Envio un POST request a {string}", async(url) => {
    response = await request(app)
        .post(url)
        .send(userData)
})

Then('El response status code es 201', () => {
    expect(response.statusCode).toBe(201)
})

Then('La respuesta debe contener un user ID', () => {
    expect(response.body).toHaveProperty('id')
})