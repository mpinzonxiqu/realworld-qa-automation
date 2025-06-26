import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './features',
  timeout: 60000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    video: 'on',
    screenshot: 'only-on-failure'
  }
});