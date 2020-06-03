const router = require('express').Router()
const { log } = require('../../config.js')
const models = require('../db/models')
const _ = require('lodash')
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers)

router.get('/:id', UserController.getOneUser)

router.post('/', UserController.createUser)

router.put('/:id', UserController.updateUser)

router.delete('/:id', UserController.deleteUser)

module.exports = router

