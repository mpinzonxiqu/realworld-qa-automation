import { When, Then } from '@cucumber/cucumber';
import { actorCalled } from '../../actors/actor';
import { CommentOnArticle } from '../../tasks/CommentOnArticle';
import { Ensure, equals } from '@serenity-js/assertions';
import { LastResponseStatus } from '../../questions/LastResponseStatus';

When('el usuario comenta en el artículo {string} con el texto {string}', (slug: string, body: string) =>
    actorCalled('Tester').attemptsTo(
        CommentOnArticle.saying(slug, body)
    )
);

Then('la respuesta del comentario debería ser {int}', (status: number) =>
    actorCalled('Tester').attemptsTo(
        Ensure.that(LastResponseStatus(), equals(status))
    )
);
