const assert = require('assert');

const chai = require('chai');

const expect = chai.expect;

const chaiAsPromisse = require('chai-as-promised');
chai.use(chaiAsPromisse);

const ms = require('../lib/dao/mongo-sentences');
const mc = require('../lib/config/mongo-config');

const col = 'new';
const dbs = 'mongodb://localhost/teste';

describe('Test MongoDB sentences layer', () => {
  it('- Test document insert -- insertDocuments', async () => {
    const db = await mc.returnDB(dbs);
    const vlr = [
      { item: 'journal', qty: 25, tags: ['blank', 'red'], size: { h: 14, w: 21, uom: 'cm' } },
      { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } },
      { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm' } },
    ];

    return expect(ms.insertDocuments(db, vlr, col)).to.be.fulfilled;
  });

  it('- Test document find -- findDocuments', async () => {
    const db = await mc.returnDB(dbs);
    return expect(ms.findDocuments(db, col)).to.be.fulfilled;
  });

  it('- Test document find -- findDocuments content ', async () => {
    const db = await mc.returnDB(dbs);

    return ms.findDocuments(db, col).then((coll) => {
      expect(coll[0].item).to.be.equal('journal');
    });
  });

});

// mocha ./tests/mongo-sentences-all
