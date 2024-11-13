import { qase } from 'cypress-qase-reporter/mocha';

describe('Suite Henrique', () => {
  qase(1,
    it('Caso de Teste 1 - Henrique via Cypress', () => {
      expect(true).to.equal(true);
    }));
   qase(2,
    it('Caso de Teste 2 - Henrique via Cypress', () => {
      expect(true).to.equal(true);
    }));
     qase(3,
    it('Caso de Teste 3 - Henrique via Cypress', () => {
      expect(true).to.equal(false);
    }));
});
