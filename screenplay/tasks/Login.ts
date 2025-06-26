import { Task } from '@serenity-js/core';
import { Click, Enter, Navigate } from '@serenity-js/playwright';

export class Login {
  static toRealWorld = () =>
    Task.where(`#actor navega al login`,
      Navigate.to('http://localhost:4100/login')
    );

  static withCredentials = (email: string, password: string) =>
    Task.where(`#actor ingresa credenciales`,
      Enter.theValue(email).into('input[type="email"]'),
      Enter.theValue(password).into('input[type="password"]'),
      Click.on('button[type="submit"]')
    );
}