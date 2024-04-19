// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {user: 'postgres',
    host: '192.168.1.10',
    database: 'vacinebem004',
    password: 'admin',
    port: 5432,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'vacinebem004',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'vacinebem004',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
