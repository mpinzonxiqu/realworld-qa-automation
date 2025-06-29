import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class FollowUser {
    static named(username: string) {
        return Task.where(`#actor sigue a ${ username }`,
            Send.a(PostRequest.to(`/profiles/${ username }/follow`)),
        );
    }
}
