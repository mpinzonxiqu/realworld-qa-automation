import { Actor } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

/**
 * Crea un actor con la habilidad de llamar a la API RealWorld
 */
export function actorCalled(name: string): Actor {
    return Actor.named(name).whoCan(
        CallAnApi.at(process.env.APIURL ?? 'https://api.realworld.io/api'),
    );
}
