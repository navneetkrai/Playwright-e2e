import { defineConfig } from '@playwright/test';

export default defineConfig({



 timeout: 120000, // 2 minutes per test


  testDir: './tests',

  use: {
    baseURL: 'https://automationintesting.online',
    headless: true
  },

  reporter: 'html'

});
