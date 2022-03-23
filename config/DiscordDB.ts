var pg = require('pg');

var conString = "postgres://root@localhost:26257/discord";

var client = new pg.Client(conString);

module.exports.getClient = new Promise(async(resolve, reject) => {
    await client.connect(async(err: any, results: unknown) => {
        resolve(results)
    })
}).then((result) => result)

