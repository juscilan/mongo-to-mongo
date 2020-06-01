const chai = require('chai');

const expect = chai.expect;

const api = require('../api');

describe('Test MongoDB api layer - NPM', () => {
  it('- Test return process api', async () => {
    const dbs = {
      dbFrom: 'mongodb://localhost/origin',
      dbTo: 'mongodb://localhost/destiny',
      flDrop: '-d',
    };

    const p = await api.clone(dbs);
    return expect(p).to.be.equal('ok');
  });
});

// mocha ./tests/api
