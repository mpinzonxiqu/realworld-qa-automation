Feature: Seguir perfiles de usuario

  Scenario: Seguir un perfil
    When el usuario sigue al perfil "user123"
    Then la respuesta del seguimiento debería ser 200