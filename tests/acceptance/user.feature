@iniciar-app
Feature: Creación de usuarios
    Scenario: Crear un nuevo usuario
        Given Tengo los siguientes datos de usuario:
            | Name | Email | Password |
            | Jhon Doe | jhon@doe.com | 123456 |
        When Envio un POST request a '/api/v1/users'
        Then El response status code es 201
        # And La respuesta debe contener un user ID