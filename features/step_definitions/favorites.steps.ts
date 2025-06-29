import { When, Then } from '@cucumber/cucumber';
import { actorCalled } from '../../actors/actor';
import { FavoriteArticle } from '../../tasks/FavoriteArticle';
import { Ensure, equals } from '@serenity-js/assertions';
import { LastResponseStatus } from '../../questions/LastResponseStatus';

let slug = '';

When('el usuario marca el artículo {string} como favorito', (articleSlug: string) => {
    slug = articleSlug;
    return actorCalled('Tester').attemptsTo(
        FavoriteArticle.withSlug(slug)
    );
});

Then('la respuesta del favorito debería ser {int}', (status: number) =>
    actorCalled('Tester').attemptsTo(
        Ensure.that(LastResponseStatus(), equals(status))
    )
);