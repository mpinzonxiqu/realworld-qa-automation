import { When, Then } from '@cucumber/cucumber';
import { actorCalled } from '../../actors/actor';
import { FollowUser } from '../../tasks/FollowUser';
import { Ensure, equals } from '@serenity-js/assertions';
import { LastResponseStatus } from '../../questions/LastResponseStatus';

When('el usuario sigue al perfil {string}', (username: string) =>
    actorCalled('Tester').attemptsTo(
        FollowUser.named(username)
    )
);

Then('la respuesta del seguimiento debería ser {int}', (status: number) =>
    actorCalled('Tester').attemptsTo(
        Ensure.that(LastResponseStatus(), equals(status))
    )
);
