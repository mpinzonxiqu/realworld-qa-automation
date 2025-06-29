import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '../../actors/actor';
import { randomUser } from '../../utils/testData';
import { Register } from '../../tasks/Register';
import { Login } from '../../tasks/Login';
import { CreateArticle } from '../../tasks/CreateArticle';
import { Ensure, equals, containAtLeastOneItemThat } from '@serenity-js/assertions';
import { LastResponseStatus } from '../../questions/LastResponseStatus';
import { Send, GetRequest } from '@serenity-js/rest';
import { LastResponseBody } from '../../questions/LastResponseBody';
import { Question } from '@serenity-js/core';

let slug = '';
let user: ReturnType<typeof randomUser>;

Given('un usuario autenticado', () => {
    user = randomUser();
    return actorCalled('Writer').attemptsTo(
        Register.with(user.email, user.password, user.username)
    );
});

When('crea un artículo con título {string}', (title: string) =>
    actorCalled('Writer').attemptsTo(
        CreateArticle.titled(title),
        Ensure.that(LastResponseStatus(), equals(200)),
        Question.about('guardar slug del artículo', async actor => {
            const body = await LastResponseBody<{ article: { slug: string } }>().answeredBy(actor);
            slug = body.article.slug;
            return slug;
        })
    )
);

When('consulta los artículos', () =>
    actorCalled('Writer').attemptsTo(
        Send.a(GetRequest.to('/articles')),
    )
);

Then('la lista debería incluir {string}', (title: string) =>
    actorCalled('Writer').attemptsTo(
        Ensure.that(
            Question.about<string[]>('títulos de artículos', async actor => {
                const response = await LastResponseBody<{ articles: Array<{ title: string }> }>().answeredBy(actor);
                return response.articles.map(article => article.title);
            }),
            containAtLeastOneItemThat(equals(title))
        )
    )
);
