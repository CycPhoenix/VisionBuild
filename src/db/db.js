const { Sequelize } = require('sequelize');

// Connect to PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Disable logging for cleaner output
});

sequelize
    .authenticate()
    .then(() => console.log('Database connection!'))
    .catch((err) => console.error('Error connecting to the database:', err));

module.exports = sequelize;
