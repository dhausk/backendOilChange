module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress:///log'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
