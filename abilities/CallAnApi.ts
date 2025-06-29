// === actors/actor.ts ===
import { actorCalled as serenityActorCalled } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

/**
 * Crea (o recupera) un actor y le otorga la habilidad de llamar la API.
 */
export function actorCalled(name: string) {
    return serenityActorCalled(name).whoCan(
        CallAnApi.at(process.env.APIURL ?? 'https://api.realworld.io/api'),
    );
}
