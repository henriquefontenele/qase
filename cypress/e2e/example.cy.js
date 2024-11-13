import { qase } from 'cypress-qase-reporter/mocha';

describe('Suite Henrique', () => {
  qase(503,
    it('Caso de Teste 3 - Henrique via Cypress', () => {
      expect(true).to.equal(true);
    }));
});