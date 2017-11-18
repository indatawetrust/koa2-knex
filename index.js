const Knex = require('knex');

module.exports = function (opts) {
  return async function (ctx, next) {
    const conn = opts.connection || { };
    const env = process.env;

    global.__knex || (global.__knex = Knex.initialize({
      client: opts.client,
      connection: {
        host: conn.host || env.KOA_KNEX_HOST,
        port: conn.port || env.KOA_KNEX_PORT,
        user: conn.user || env.KOA_KNEX_USER,
        password: conn.password || env.KOA_KNEX_PASSWORD,
        database: conn.database || env.KOA_KNEX_DATABASE,
        charset: conn.charset || env.KOA_KNEX_CHARSET,
        ssl: conn.ssl || env.KOA_KNEX_SSL,
        debug: conn.debug || env.KOA_KNEX_DEBUG,

        /** For SQLite 3: http://knexjs.org/#Initialize */
        filename: conn.filename || env.KOA_KNEX_FILENAME
      }
    }));

    ctx.knex = global.__knex;

    await next();
  };
};
