const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j36185',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
