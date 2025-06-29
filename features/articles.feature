Feature: Gestión de artículos

  Background:
    Given un usuario autenticado

  Scenario: Crear artículo y recuperarlo
    When crea un artículo con título "Artículo de prueba"
    Then la respuesta debería ser 200
    When consulta los artículos
    Then la lista debería incluir "Artículo de prueba"