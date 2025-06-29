import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export class Login {
    static with(email: string, password: string) {
        return Task.where(`#actor inicia sesión`,
            Send.a(PostRequest.to('/users/login').with({
                user: { email, password },
            })),
        );
    }
}
