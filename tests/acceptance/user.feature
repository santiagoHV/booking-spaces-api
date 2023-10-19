@iniciar-app
Feature: Gestion de usuarios

    Scenario: Crear un nuevo usuario
        Given Tengo los siguientes datos de usuario:
            | Name | Email | Password |
            | Jhon Doe | jhon@doe.com | 123456 |
        When Envio un POST request a '/api/v1/users'
        Then El response status code es '201'
        And La respuesta debe contener el campo 'id'
    
    Scenario: Obtener un usuario creado
        When Envio un GET request a '/api/v1/users/1'
        Then El response status code es '200'
        And La respuesta debe contener el campo 'id'
        And La respuesta debe contener el campo 'name'
        And La respuesta debe contener el campo 'email'

    Scenario: Obtener un usuario no existente
        When Envio un GET request a '/api/v1/users/100'
        Then El response status code es '404'