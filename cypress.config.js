const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig ({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        reportDir: 'allure-results',
      });
      return config;
    },
  },
  env: {
    allure: true,
  },
})