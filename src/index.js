const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const app = express()
const config = require('../config.js')
const expressWinston = require('express-winston')
const winston = require('winston')

app.use(helmet());

if (config.ENV !== 'test') {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.timestamp(),
      winston.format.colorize({all: true}),
      winston.format.simple(),
      winston.format.printf(info => {
        return `${info.timestamp} [${info.level}]: ${info.message}`
      }),
    )
  }))
}

const server = require('http').Server(app);

app.get('/',(req, res) => {
	console.log('HELLO WORLD!')
	res.json({status: 200})
})

app.use('/', routes);

app.use(cors())

module.exports = server;

