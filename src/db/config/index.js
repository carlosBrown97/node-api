const config = require('../../../config.js');

module.exports = {
	development: {
		"username": config.DB_USER,
		"password": config.DB_PASS,
		"database": config.DB_NAME,
		"host": config.DB_HOST,
		"port": config.DB_PORT,
		"dialect": config.dialect || "postgres"
	},
	test: {
		"username": config.DB_USER,
		"password": config.DB_PASS,
		"database": config.DB_NAME || "node-test",
		"host": config.DB_HOST,
		"port": config.DB_PORT,
		"dialect": config.dialect || "postgres"
	},
	production: {
		"username": config.DB_USER,
		"password": config.DB_PASS,
		"database": config.DB_NAME,
		"host": config.DB_HOST,
		"port": config.DB_PORT,
		"dialect": config.dialect || "postgres"
	}
}

