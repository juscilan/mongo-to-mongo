const mgCli = require('mongodb').MongoClient;

const returnDB = url => new Promise((resolve, reject) => {
  mgCli.connect(url, (err, db) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(db);
  });
});

module.exports = {
  returnDB,
};
