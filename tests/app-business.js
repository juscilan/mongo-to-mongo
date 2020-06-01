const chai = require('chai');
const app = require('../lib/business/app-business');
const chaiAsPromisse = require('chai-as-promised');

chai.use(chaiAsPromisse);
const expect = chai.expect;

const col = {
  name: 'new',
};

const objdrop = {
  dbTo: 'mongodb://localhost/origin',
  col,
  dbFrom: 'mongodb://localhost/destiny',
};

const db = 'mongodb://localhost/teste';

describe('Test MongoDB business app layer', () => {
  it('- Test find all collections - findCollections ', async () => expect(app.findCollections(db)).to.be.fulfilled);

  it('- Test drop DB - drop Promisse', async () => expect(app.drop(objdrop)).to.be.fulfilled);

  it('- Test drop all collecions - drop ', async () => expect(app.drop(objdrop)).to.be.fulfilled);


  it('- Test drop DB - drop ', async () => {
    const p = await app.drop(objdrop);
    return expect(p).to.be.equal('ok');
  });
});

// mocha ./tests/app-business
