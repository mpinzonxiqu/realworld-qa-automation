// cucumber.ts
import { configure } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

configure({
  crew: [
    ConsoleReporter.forDarkTerminals(),
    new SerenityBDDReporter(),
  ],
});
