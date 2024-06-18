module.exports = {
  HOST: "localhost",
  PORT: 5432,
  USER: "odoo17",
  PASSWORD: "admin",
  DB: "cie",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};