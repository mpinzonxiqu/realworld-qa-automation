# RealWorld API Screenplay Tests

Automated end‑to‑end API tests for the RealWorld back‑end, written in **TypeScript** with the **Screenplay Pattern**, **Serenity/JS** and **Cucumber**.

---

##  proyecto Funcionalidades 

| Característica | Detalle |
| -------------- | ------- |
| **Cobertura**  | Prueba todos los endpoints públicos de RealWorld. |
| **Patrón**     | Usa el Screenplay Pattern → actores, tareas y preguntas reutilizables. |
| **BDD**        | Escenarios escritos en Gherkin (`*.feature`). |
| **Reportes**   | Soporte CLI y Serenity BDD HTML (`npm run report`). |
| **Escalable**  | Añadir nuevos endpoints = tarea + pasos, sin duplicar código. |

---

##  Estructura del proyecto

realworld-api-screenplay/
├── actors/
├── abilities/
├── tasks/
├── questions/
├── utils/
├── features/
│ └── step_definitions/
├── cucumber.ts
├── tsconfig.json
├── package.json
└── README.md

---

## 🔌 Endpoints cubiertos

| Módulo     | Endpoints |
|------------|-----------|
| **Auth**   | `POST /users`, `POST /users/login`, `GET /user`, `PUT /user` |
| **Articles** | `GET`, `POST`, `PUT`, `DELETE` /articles |
| **Favorites** | `POST` / `DELETE` /articles/:slug/favorite |
| **Comments** | `POST`, `GET`, `DELETE` /articles/:slug/comments |
| **Profiles** | `GET`, `POST`, `DELETE` /profiles/:username/follow |
| **Tags** | `GET /tags` |

---

## Instalación

```bash
git clone https://github.com/tu-usuario/realworld-api-screenplay.git
cd realworld-api-screenplay
npm install
Variables de entorno
Variable	Descripción	Por defecto
APIURL	URL base de la API	https://api.realworld.io/api

Ejemplo local:

export APIURL=http://localhost:3000/api


Ejecución


npm test            # Ejecuta todas las pruebas
npm run report      # Genera reporte Serenity
Abre luego target/site/serenity/index.html

  Scripts útiles

Comando	Acción
npm test	Ejecuta todos los .feature
npm run report	Genera reporte HTML
npm run lint	Corre ESLint (si está configurado)


 Cómo funciona

actor → se crea con actorCalled()

tasks → peticiones (Register.with(), CreateArticle.titled())

questions → respuestas (LastResponseStatus, LastResponseBody)

steps → traducen los .feature en acciones



 Añadir nuevos escenarios
Crear un archivo .feature

Implementar nueva task o question

Añadir steps a step_definitions/*.steps.ts

Ejecutar con npm test


