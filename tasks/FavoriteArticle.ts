import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class FavoriteArticle {
    static withSlug(slug: string) {
        return Task.where(`#actor marca favorito`,
            Send.a(PostRequest.to(`/articles/${ slug }/favorite`)),
        );
    }
}
