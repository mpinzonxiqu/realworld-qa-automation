import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const LastResponseStatus = () =>
    Question.about<number>('HTTP status', actor =>
        LastResponse.status().answeredBy(actor)
    );
