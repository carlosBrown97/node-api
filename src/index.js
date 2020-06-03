const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const app = express()

app.use(helmet());


const server = require('http').Server(app);

app.get('/',(req, res) => {
	console.log('HELLO WORLD!')
	res.json({status: 200})
})

app.use('/', routes);

app.use(cors())

module.exports = server;

