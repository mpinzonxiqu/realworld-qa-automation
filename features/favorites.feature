Feature: Marcar artículo como favorito

  Scenario: Favoritar un artículo existente
    When el usuario marca el artículo "test-article-slug" como favorito
    Then la respuesta del favorito debería ser 200