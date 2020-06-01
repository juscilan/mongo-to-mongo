const api = require('./api');

const dbFrom = process.argv[2];
const dbTo = process.argv[3];
const flDrop = process.argv[4];

const dbs = {
  dbFrom,
  dbTo,
  flDrop,
};

api.clone(dbs);

