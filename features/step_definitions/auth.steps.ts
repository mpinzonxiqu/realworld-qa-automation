import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '../../actors/actor';
import { Register } from '../../tasks/Register';
import { Login } from '../../tasks/Login';
import { Ensure, equals } from '@serenity-js/assertions';
import { LastResponseStatus } from '../../questions/LastResponseStatus';
import { randomUser } from '../../utils/testData';

let user: ReturnType<typeof randomUser>;

Given('un usuario nuevo aleatorio', () => {
    user = randomUser();
});

When('se registra en la API', () =>
    actorCalled('Tester').attemptsTo(
        Register.with(user.email, user.password, user.username),
    ),
);

Then('la respuesta debería ser {int}', (status: number) =>
    actorCalled('Tester').attemptsTo(
        Ensure.that(LastResponseStatus(), equals(status)),
    ),
);

When('inicia sesión con sus credenciales', () =>
    actorCalled('Tester').attemptsTo(
        Login.with(user.email, user.password),
    ),
);