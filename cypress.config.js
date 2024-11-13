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
          token: 'c8da1c5772ad85161bca413664c485d65cc9664d5ce24b9a38aa3e7087e2c5bb', // replace with your Cypress app token
        },
        project: 'PHT',  // replace with your project code
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