const mgConfig = require('../config/mongo-config');
const mgSentences = require('../dao/mongo-sentences');


const findCollections = async (dbFrom) => {
  const db = await mgConfig.returnDB(dbFrom);

  return new Promise((resolve, reject) => {
    db.listCollections().toArray((err, ret) => {
      if (err) {
        reject(err);
        return;
      }
      db.close();
      resolve(ret);
    });
  });
};

const clone = async (objdrop) => {
  const dbFrom = await mgConfig.returnDB(objdrop.dbFrom);
  const dbTo = await mgConfig.returnDB(objdrop.dbTo);
  const dataDocs = await mgSentences.findDocuments(dbFrom, objdrop.col.name);
  const inst = await mgSentences.insertDocuments(dbTo, dataDocs, objdrop.col.name);

  dbFrom.close();
  dbTo.close();

  return inst;
};


const drop = async (objdrop) => {
  const dbTo = await mgConfig.returnDB(objdrop.dbTo);

  if (objdrop.col.name != 'system.indexes') {
    const dropper = await mgSentences.dropDocuments(dbTo, objdrop.col.name);
    return 'ok';
  }

  dbTo.close();
  return null;
};


module.exports = {
  findCollections,
  clone,
  drop,
};
