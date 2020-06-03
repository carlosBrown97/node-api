const _ = require('lodash');
const express = require('express');
const config = require('../config')
const app = require('../src/index')

app.listen(config.PORT, config.HOST, () => {
	config.log.info('Listen on http://%s:%s', config.HOST, config.PORT);
	config.log.info('Configuration set to %s', JSON.stringify(_.omit(config, ['log'])))
})

