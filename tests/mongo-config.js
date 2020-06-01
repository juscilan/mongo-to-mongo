const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const db = 'mongodb://localhost/teste';

const mc = require('../lib/config/mongo-config');

describe('Test MongoDB config layer', () => {
  it('- Test return of promises fulfilled', () => expect(mc.returnDB(db)).to.be.fulfilled);
});

// mocha ./tests/mongo-config
