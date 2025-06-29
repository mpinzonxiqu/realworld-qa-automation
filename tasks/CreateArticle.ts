import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class CreateArticle {
    static titled(title: string) {
        return Task.where(`#actor crea artículo`,
            Send.a(PostRequest.to('/articles').with({
                article: {
                    title,
                    description: 'Descripción de prueba',
                    body: 'Cuerpo del artículo',
                    tagList: ['testing', 'api'],
                },
            })),
        );
    }
}
