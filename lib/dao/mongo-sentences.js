

const insertDocuments = (db, vlr, col) => {
  const collection = db.collection(col);

  return new Promise((resolve, reject) => {
    if (col === 'system.indexes' || col === 'objectlabs-system') { resolve(null); }

    collection.insertMany(vlr, (err, result) => {
      db.close();
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};


const findDocuments = (db, col) => {
  const collection = db.collection(col);

  return new Promise((resolve, reject) => {
    collection.find({}).toArray((err, docs) => {
      db.close();
      if (err) {
        reject(err);
        return;
      }
      resolve(docs);
    });
  });
};

const dropDocuments = (db, col) => {
  const collection = db.collection(col);

  return new Promise((resolve, reject) => {
    collection.remove((err, result) => {
      db.close();
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

module.exports = {
  insertDocuments,
  findDocuments,
  dropDocuments,
};
