const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "http://testeqa.pge.ce.gov.br",
    user: "qa.teste@teste.pge.ce.gov.br",
    password: "3Fh$8Dx@mNv6#bKj1Zp%",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
