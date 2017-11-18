# koa2-knex
knex middleware for koa2

koa2-knex
===================

Knex.js Middleware for Koa2. Package is versioned in step with <http://knexjs.org/#changelog>

### 0. Installation (via [npm](https://npmjs.org/package/koa2-knex))

```bash
  $ npm install koa2-knex --save
```

### 1. Usage (contrived example)

```javascript

  const knex = require('koa2-knex');
  ...
  app.use(knex({
    client: 'pg',
    connection: {
      /** typical knex connection object */
    }
  });

```

### 2. Options

The following environment variables will be automatically used for the Knex.js connection object if set:
```
  KOA_KNEX_HOST
  KOA_KNEX_PORT
  KOA_KNEX_USER
  KOA_KNEX_PASSWORD
  KOA_KNEX_DATABASE
  KOA_KNEX_CHARSET
  KOA_KNEX_SSL
  KOA_KNEX_DEBUG
```
  
### License

[MIT](http://www.opensource.org/licenses/mit-license.php)
