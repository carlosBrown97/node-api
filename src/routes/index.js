const router = require('express').Router();
const rolesRouter = require('./roles')
const usersRouter = require('./users')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.use('/roles', rolesRouter);
router.use('/users', usersRouter);

module.exports = router;

