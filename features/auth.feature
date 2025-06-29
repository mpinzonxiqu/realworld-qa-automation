Feature: Autenticación RealWorld API

  Scenario: Registro y login exitoso
    Given un usuario nuevo aleatorio
    When se registra en la API
    Then la respuesta debería ser 200
    When inicia sesión con sus credenciales
    Then la respuesta debería ser 200