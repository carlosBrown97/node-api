'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../../../config.js');

const db = {};

let sequelize;

sequelize = new Sequelize(
	config.DB_NAME,
	config.DB_USER,
	config.DB_PASS,
	{
		dialect: config.dialect || 'postgres',
		host: config.DB_HOST,
		port: config.DB_PORT,
		logging: config.DB_LOGS
	}
);

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

module.exports = db;

