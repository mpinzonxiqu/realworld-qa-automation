import { Question } from '@serenity-js/core';
import { Page } from '@serenity-js/playwright';

export class PageTitle {
  static value = () =>
    Question.about('el título de la página', async actor => {
      return await Page.current().title().answeredBy(actor);
    });
}