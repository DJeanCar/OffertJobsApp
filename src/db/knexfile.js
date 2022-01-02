
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'mysecret',
      database : 'postgres'
    },
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  },
};
