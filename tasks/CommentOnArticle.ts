import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class CommentOnArticle {
    static saying(slug: string, body: string) {
        return Task.where(`#actor comenta`,
            Send.a(PostRequest.to(`/articles/${ slug }/comments`).with({
                comment: { body },
            })),
        );
    }
}
