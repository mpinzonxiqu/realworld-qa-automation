import { Actor } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium } from 'playwright';

export async function actorCalled(name: string): Promise<Actor> {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  return Actor.named(name).whoCan(BrowseTheWebWithPlaywright.using(page));
}