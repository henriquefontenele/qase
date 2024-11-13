import { qase } from 'cypress-qase-reporter/mocha';

describe('Suite Henrique', () => {

  qase(501,
    it('Caso de Teste 1 - Henrique via Cypress', () => {
      // Step 1: Visit the webpage 
      //qase.title('Titulo do CT 1');
      expect(true).to.equal(true);
      //cy.visit('https://sandbox.clicksign.com/');  // Visit this page.
      //cy.get('h1').should('have.text', 'Example Domain'); // Check title
    }));
  });