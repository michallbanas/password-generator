const { defineConfig } = require("cypress")

module.exports = defineConfig({
  failOnStatusCode: false,
  video: false,
  env: {
    hideXHRInCommandLog: true,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
  },
})
