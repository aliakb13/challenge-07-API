/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

const Sequelize = require('sequelize');

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "aqdP5XfR698GTt96mlPm",
  DB_HOST = "containers-us-west-115.railway.app",
  DB_NAME = "railway",
  DB_PORT = "5489",
  DB_URI = "postgresql://postgres:aqdP5XfR698GTt96mlPm@containers-us-west-115.railway.app:5489/railway"
} = process.env;

const db = new Sequelize(DB_URI, {
  define: {
    timestamps: false
  }
});

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  db
};
