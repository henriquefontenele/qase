import { qase } from 'cypress-qase-reporter/mocha';

describe('Suite Henrique', () => {

  qase(502,
  it('Caso de Teste 2 - Henrique via Cypress', () => {
    cy.visit('https://sandbox.clicksign.com/');

    // Verificações adicionais (opcional)
    //cy.title().should('eq', 'Clicksign - Assinatura Digital e Eletrônica de Documentos');
   // cy.url().should('include', 'sandbox.clicksign.com');
  }));
});