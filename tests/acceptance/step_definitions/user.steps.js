const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('supertest')
const createApp = require('../../../app')


Given('Tengo los siguientes datos de usuario:', (table) => {
    data = table.hashes()[0]
})



