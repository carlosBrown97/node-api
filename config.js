const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

const configPath = process.env.CONFIG_PATH || path.join(__dirname, 'config.json');

let log;
let config;
let dbOptions = {};

try {
	config = JSON.parse(fs.readFileSync(configPath));

	if(require.main !== module) {
		console.log('Using config file at', configPath);
	}
} catch (e) {
	config = {};
}

config = _.merge({}, {
	DB_HOST: process.env.DB_HOST,
	DB_PORT: process.env.DB_PORT,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	DB_NAME: process.env.DB_NAME,
	ENV: process.env.NODE_ENV || 'development',
	HOST: process.env.HOST || '127.0.0.1',
	PORT: process.env.PORT || 3000,
	SECRET_KEY: process.env.SECRET_KEY || 'a stong secret key',
	DB_OPTIONS: { dialect: 'postgres' },
	LOG_LEVEL: process.env.LOG_LEVEL || 'INFO',
	DB_URL: process.env.DB_URL || 'postgres://localhost:5432/node-api',
}, config);

const loggerTransports = [new winston.transports.Console()]

const loggerFormat = winston.format.printf(info => {
	return `${info.timestamp} [${info.level}]: ${info.message}`
})


winston.addColors({
	emerg: 'red',
	alert: 'red',
	crit: 'red',
	error: 'red',
	warning: 'yellow',
	notice: 'gray',
	cache: 'magenta',
	sql: 'cyan',
	info: 'grey',
	debug: 'white'
})

log = winston.createLogger({
	levels: {
		emerg: 0,
		alert: 1,
		crit: 2,
		error: 3,
		warning: 4,
		notice: 5,
		cache: 6,
		sql: 7,
		info: 8,
		debug: 9
	},
	level: config.LOG_LEVEL.toLowerCase(),
	format: winston.format.combine(
		winston.format.splat(),
		winston.format.timestamp(),
		winston.format.colorize({ all: true }),
		winston.format.simple(),
		loggerFormat
	),
	transports: loggerTransports
});

console.log(`NODE_ENV=${config.ENV}`)

if( config.DB_LOGS === false ){
	dbOptions.logging = false;
}

config.log = log;
config.DB_OPTIONS = _.merge({}, config.DB_OPTIONS, dbOptions);


if(require.main === module){
	const args = process.argv.slice(2);

	if( args.length > 0 ){
		console.log( _.get(config, args[0]) );
	}else{
		console.log( config );
	}
}
module.exports = config;

