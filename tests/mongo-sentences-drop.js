const chai = require('chai');

const expect = chai.expect;

const chaiAsPromisse = require('chai-as-promised');

chai.use(chaiAsPromisse);

const ms = require('../lib/dao/mongo-sentences');
const mc = require('../lib/config/mongo-config');

const col = 'new';
const dbs = 'mongodb://localhost/teste';

describe('Test MongoDB sentences layer', () => {
  it('- Test document drop all ', async () => {
    const db = await mc.returnDB(dbs);
    return expect(ms.dropDocuments(db, col)).to.be.fulfilled;
  });
});
