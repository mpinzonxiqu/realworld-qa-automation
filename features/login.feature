Feature: Login de usuario

  Scenario: Usuario se loguea exitosamente
    Given que el usuario abre la aplicación
    When ingresa su email y contraseña válidos
    Then debería ver el título "conduit"