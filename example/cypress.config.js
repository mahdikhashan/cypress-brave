import { defineConfig } from 'cypress'
import braveBrowser from 'cypress-brave'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return braveBrowser().then((browser) => {
        return {
          browsers: config.browsers.concat(browser),
        }
      })
    }
  }
})