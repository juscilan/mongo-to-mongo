const appBusiness = require('./lib/business/app-business');

const clone = async (dbs) => {
  const dbFrom = dbs.dbFrom || process.argv[2];
  const dbTo = dbs.dbTo || process.argv[3];
  const flDrop = dbs.flDrop || process.argv[4];

  try {
    const collections = await appBusiness.findCollections(dbFrom);

    collections.map(async (col) => {
      const objdrop = {
        dbTo,
        col,
        dbFrom,
      };

      if (flDrop === '-d') {
        await appBusiness.drop(objdrop);
      }

      await appBusiness.clone(objdrop);
    });

    return 'ok';
  } catch (e) {
    return `'ERR !!!! ${e}`;
  }
};

module.exports = { clone };

