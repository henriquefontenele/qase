import cypress from 'cypress';
import qasePlugin from 'cypress-qase-reporter/plugin';

export default cypress.defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      debug: true,
      testops: {
        api: {
          token: '7738539c5206d6690ea2254ac563b2fb01afbb532f92087d0f4a92abac8a58ad', // replace with your Cypress app token
        },
        project: 'GAC',  // replace with your project code
        uploadAttachments: true,
        run: {
          complete: true,
        },
      },
      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        },
      },
    },
  },
  video: false,

  e2e: {
    "supportFile": false,
    setupNodeEvents(on, config) {
      //require('cypress-qase-reporter/plugin')(on, config)
      //require('cypress-qase-reporter/metadata')(on)

      on('task', {
        log(message) {console.log(message)
                 return null
        }
      })
     qasePlugin(on, config); 
    },
   
  },
});
