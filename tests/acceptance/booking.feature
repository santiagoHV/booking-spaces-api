@iniciar-app
Feature: Gestión de reservas
    Scenario: Crear una nueva reserva
        Given Tengo los siguientes datos de reserva
            | startTime | endTime | date | resourceId | userId |
            | 10:00     | 12:00   | 2025-12-01 | 1 | 1 |
        When Envio un POST request a '/api/v1/bookings'
        Then El response status code es '201'

    Scenario: Crear una nueva reserva en un horario ocupado
        Given Tengo los siguientes datos de reserva
            | startTime | endTime | date | resourceId | userId |
            | 10:00     | 12:00   | 2025-12-01 | 1 | 1 |
        When Envio un POST request a '/api/v1/bookings'
        Then El response status code es '400'
        Then El campo 'message' en la respuesta es 'Resource not available'

    Scenario: Crear una nueva reserva en un bloque horario no disponible para el recurso
        Given Tengo los siguientes datos de reserva
            | startTime | endTime | date | resourceId | userId |
            | 10:00     | 11:00   | 2025-12-01 | 1 | 1 |
        When Envio un POST request a '/api/v1/bookings'
        Then El response status code es '400'
        Then El campo 'message' en la respuesta es 'Invalid block'