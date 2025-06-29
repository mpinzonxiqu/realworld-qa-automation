// questions/LastResponseBody.ts
import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const LastResponseBody = <T = any>() =>
    Question.about<T>('el cuerpo de la respuesta', actor =>
        LastResponse.body<T>().answeredBy(actor)
    );
