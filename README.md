# Cypress Brave integration
### Use Chromium-based Brave browser on any OS to run your Cypress E2E tests 


![npm (tag)](https://img.shields.io/npm/v/cypress-brave/latest?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cypress-brave)
![npm](https://img.shields.io/npm/dy/cypress-brave)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/cypress-brave/peer/vue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/cypress-brave)
![NPM](https://img.shields.io/npm/l/cypress-brave)

## Installation
```
npm install cypress-brave --save-dev
```

## How to use

```js
import { defineConfig } from 'cypress'
import braveBrowser from 'cypress-brave'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // We need to find the browser and append 
      // it to the list of browsers 
      return braveBrowser().then((browser) => {
        return {
          browsers: config.browsers.concat(browser),
        }
      })
      
    }
  }
})
```

## Contributing

If you want to contribute to this project simply fork it and clone it then run
`npm i`
in the root of the project, then run
`npm run start`
to run development server.

### Licence and cast

MIT Licence

by [Mahdi Khashan](https://www.linkedin.com/in/mahdi-khashan-ir/)
