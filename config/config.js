module.exports = 
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "startup_quotes",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "startup_quotes_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PASSWORD,
    "database": "startup_quotes",
    "host": process.env.RDS_HOSTNAME,
    "port": process.env.RDS_PORT,
    "dialect": "postgres"
  }
}
