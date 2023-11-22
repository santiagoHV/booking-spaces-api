@iniciar-app
Feature: Gestión de recursos y disponibilidad

    Scenario: Crear un nuevo recurso
        Given Tengo los siguientes datos del recurso
            | name | description | type | stock | details | 
            | Salón 2 | Descripción del salon 2 | Space | 1 | Detalles del salon 2 |
        When Envio un POST request a '/api/v1/resources'
        Then El response status code es '201'
        Then El id en la respuesta es '2'
        Then El campo 'name' en la respuesta es 'Salón 2'
        Then El campo 'description' en la respuesta es 'Descripción del salon 2'
        Then El campo 'type' en la respuesta es 'Space'
        Then El campo 'stock' en la respuesta es '1'
        Then El campo 'details' en la respuesta es 'Detalles del salon 2'

    Scenario: Crear espacios de disponibilidad para el recurso creado
        Given Tengo los siguientes datos de disponibilidad
            | startTime | endTime | day | resourceId |
            | 08:00 | 10:00 | 1 | 1 |
            | 10:00 | 12:00 | 1 | 1 |
            | 14:00 | 16:00 | 1 | 1 |
            | 16:00 | 18:00 | 1 | 1 |
        When Envio un POST request a '/api/v1/resources/2/availability/bulk'
        Then El response status code es '201'
        And El id en la respuesta es '2'
        And El campo 'name' en la respuesta es 'Salón 2'
        And El campo 'availabilities' existe

    Scenario: Obtener todos los recursos

    Scenario: Obtener un recurso
        When Envio un GET request a '/api/v1/resources/2'
        Then El response status code es '200'
        Then El campo 'name' en la respuesta es 'Salón 2'
        Then El campo 'description' en la respuesta es 'Descripción del salon 2'
        Then El campo 'type' en la respuesta es 'Space'
        Then El campo 'stock' en la respuesta es '1'
        Then El campo 'details' en la respuesta es 'Detalles del salon 2'

    Scenario: Actualizar un recurso
        Given Tengo los siguientes datos del recurso
            | name | description | type | stock | details |
            | Salón 2 | Descripción del salon 2 alterada | Space | 1 | Detalles del salon 2 |
        Then Envio un PUT request a '/api/v1/resources/2'
        Then El response status code es '200'
        Then El campo 'name' en la respuesta es 'Salón 2'
        Then El campo 'description' en la respuesta es 'Descripción del salon 2 alterada'
        Then El campo 'type' en la respuesta es 'Space'
        Then El campo 'stock' en la respuesta es '1'
        Then El campo 'details' en la respuesta es 'Detalles del salon 2'

    Scenario: Borrar recurso
        When Envio un DELETE request a '/api/v1/resources/1'
        Then El response status code es '204'
