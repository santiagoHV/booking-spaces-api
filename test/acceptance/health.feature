@iniciar-app
Feature: API funcionando correctamente
    
    Scenario: Endpoint basico funcionando correctamente
        When Envio un GET request a /
        Then El status code es 200