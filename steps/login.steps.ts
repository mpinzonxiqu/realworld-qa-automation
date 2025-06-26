import { Given, When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { Login } from '../screenplay/tasks/Login';
import { PageTitle } from '../screenplay/questions/PageTitle';

Given('que el usuario abre la aplicación', async function () {
  await actorInTheSpotlight().attemptsTo(Login.toRealWorld());
});

When('ingresa su email y contraseña válidos', async function () {
  await actorInTheSpotlight().attemptsTo(
    Login.withCredentials('demo@example.com', 'P@ssw0rd')
  );
});

Then('debería ver el título {string}', async function (expectedTitle: string) {
  await actorInTheSpotlight().attemptsTo(
    Ensure.that(PageTitle.value(), equals(expectedTitle))
  );
});