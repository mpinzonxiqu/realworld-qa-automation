Feature: Comentar en artículos

  Scenario: Comentar un artículo
    When el usuario comenta en el artículo "test-article-slug" con el texto "Excelente contenido!"
    Then la respuesta del comentario debería ser 200