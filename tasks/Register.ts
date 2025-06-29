import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class Register {
    static with(email: string, password: string, username: string) {
        return Task.where(`#actor registers new user`,
            Send.a(PostRequest.to('/users').with({
                user: { email, password, username }
            }))
        );
    }
}
