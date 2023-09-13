const { defineConfig } = require("cypress")

module.exports = defineConfig({
  failOnStatusCode: false,
  video: false,
  env: {
    hideXHRInCommandLog: true,
  },
  e2e: {
    baseUrl: "http://localhost:3030",
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
  },
})
